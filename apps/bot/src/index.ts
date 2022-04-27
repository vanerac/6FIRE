import dotenv from 'dotenv';
import Cache, { Position } from './cache';
import TelegramBot from './bot';
import * as Sentry from '@sentry/node';
import * as pnlWatcher from 'binance-leaderboard-listener';
import Database, { Trader } from './database';
import EventEmitter from 'events';
import { positionDifferential } from './calc';

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

async function handleUpdate(trader: Trader, data: Position[]) {
    const cache = await Cache.getInstance();
    const oldPositionsState = await cache.getPositions(trader.clientId);
    await cache.setTrader(trader.clientId, data);

    if (!oldPositionsState) {
        console.log('No old positions state');
        return;
    }

    // console.log(oldPositionsState, data);
    // calculate the difference between the 2 arrays
    const difference = positionDifferential(data, oldPositionsState);

    const message = `${difference.closed.length} closed positions and ${difference.opened.length} opened positions`;
    cache.addMessage('@vanerac', message);
    if (!(difference.closed.length || difference.opened.length)) {
        console.log('no difference');
        return;
    }

    const followers = await Database.getFollowers(trader.id);
    followers.forEach((follower) => {
        cache.addMessage(follower.User.telegramId, message);
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
