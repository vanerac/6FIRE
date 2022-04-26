import { Scraper } from '@shared/scraper/scrape';
import dotenv from 'dotenv';
import Database from './database';
import Cache from './cache';
import { ScrapeDifferential, scrapeDifferential } from './calc';
import TelegramBot from './bot';
import * as Sentry from '@sentry/node';

dotenv.config();

Sentry.init({
    dsn: 'https://49a026fac25a470cbd33aed4ba2f6d27@o185500.ingest.sentry.io/6363208',

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
    environment: process.env.NODE_ENV === 'production' ? 'production' : 'development',
});

// const transaction = Sentry.startTransaction({
//     op: 'test',
//     name: 'My First Test Transaction',
// });
//
// setTimeout(() => {
//     try {
//         throw new Error('Oops!');
//     } catch (e) {
//         Sentry.captureException(e);
//     } finally {
//         transaction.finish();
//     }
// }, 99);

const cache = new Cache();
const bot = new TelegramBot();
const scraper = Scraper.getInstance(process.env.APIFY_KEY);

async function formatMessage(traderId: string, data: ScrapeDifferential) {
    return `${traderId} has opened ${data.opened.length} and closed ${data.closed.length} positions.`;
}

bot.listenMessageQueue();

async function RunBot() {
    const curatedTraders = await Database.getCuratedTraders();
    await Promise.all(
        curatedTraders.map(async (trader) => {
            // Todo: Note: can i use the array of profiles to accelerate scrapes ?
            // Todo: Note: On the other side, this also mitigates the flood of requests to the API when sending a message

            const data = await scraper.scrapeProfile([trader.id]);

            const { positions } = data;
            console.log(`${name} has a position of ${positions}`);
            const previousPositions = await cache.getPositions(trader.id);
            await cache.setTrader(trader.id, positions);
            const res = { traderId: trader.id, data: scrapeDifferential(previousPositions, positions) };

            // Todo send notification here ?

            const followers = await Database.getFollowers(res.traderId); // Todo: Note: can i use the cache for this instead
            followers.map(async (follower) => {
                const formattedMessage = await formatMessage(res.traderId, res.data);
                cache.addMessage(follower.User.telegramId, formattedMessage);
            });
        }),
    );
}

(async () => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const now = new Date();
        await RunBot();
        const timeToWait = new Date(now.getTime() + 1000 * 60 * 5); // 5m
        console.log(`Waiting for ${timeToWait}`);
        await new Promise((resolve) => setTimeout(resolve, timeToWait.getTime() - now.getTime()));
    }
})();

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    Sentry.captureException(reason);
});
