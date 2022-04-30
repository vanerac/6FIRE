import dotenv from 'dotenv';
import Cache, { Position } from './cache';
import TelegramBot from './bot';
import * as Sentry from '@sentry/node';
import * as pnlWatcher from 'binance-leaderboard-listener';
import Database, { Trader } from './database';
import EventEmitter from 'events';
import { positionDifferential } from './calc';
import { amountChangeMessage, closedPositionMessage, openedPositionMessage } from './format';

dotenv.config();

Sentry.init({
    dsn: 'https://49a026fac25a470cbd33aed4ba2f6d27@o185500.ingest.sentry.io/6363208',
    tracesSampleRate: 1.0,
    environment: process.env.NODE_ENV === 'production' ? 'production' : 'development',
});

const bot = new TelegramBot();

// bot.listenMessageQueue();

const listeners: {
    traderId: string;
    listener: EventEmitter;
}[] = [];

const formatMessage = (traderName: string, oldPositions: Position[], newPositions: Position[]): string[] => {
    // Opening positions can be long or short

    const { opened, closed } = positionDifferential(oldPositions, newPositions);

    const openedPostionsMessages = openedPositionMessage(traderName, opened);
    const closedPostionsMessages = closedPositionMessage(traderName, closed);
    const amountChange = amountChangeMessage(traderName, oldPositions, newPositions);

    return [...openedPostionsMessages, ...closedPostionsMessages, ...amountChange];
};

async function handleUpdate(trader: Trader, data: Position[]) {
    const cache = await Cache.getInstance();
    const oldPositionsState = await cache.getPositions(trader.clientId);
    await cache.setTrader(trader.clientId, data);

    if (!oldPositionsState) {
        return;
    }

    const messages = formatMessage(trader.name, oldPositionsState, data);
    if (!messages.length) {
        return;
    }

    const followers = await Database.getFollowers(trader.id);
    followers.forEach((follower) => {
        messages.map((message) => cache.addMessage(follower.User.telegramId, message));
    });
}

async function updateListeners() {
    const curatedTraders = await Database.getCuratedTraders();

    const newListeners = curatedTraders.filter(
        (trader) => listeners.find((listener) => listener.traderId === trader.id) === undefined,
    );
    console.log('Adding new listeners', newListeners.length);
    if (!newListeners.length) {
        return;
    }
    await Cache.getInstance().catch((e) => console.error(e));
    newListeners.forEach((trader) => {
        console.log('Adding listener', trader.clientId);
        const listener = pnlWatcher.listen({
            delay: 1000,
            encryptedUid: trader.clientId,
            tradeType: 'PERPETUAL',
        });
        listeners.push({
            traderId: trader.id,
            listener,
        });
        listener.on('update', (data: Position[]) => {
            handleUpdate(trader, data);
        });
    });

    bot.listenMessageQueue(await Cache.getInstance());
}

setInterval(updateListeners, 1000 * 60 * 5); // every 5m

updateListeners();

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    Sentry.captureException(reason);
});

process.on('beforeExit', () => {
    Cache.destroy();
});
