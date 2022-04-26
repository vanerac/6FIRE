import { Scraper } from '@shared/scraper/scrape';
import dotenv from 'dotenv';
import Database from './database';
import Cache from './cache';
import { ScrapeDifferential, scrapeDifferential } from './calc';
import sendMessage from './bot';

dotenv.config();
/* Todo:
 *  - Implement database fetching
 *  - Implement position Caching with redis
 */

const cache = new Cache();

async function formatMessage(traderId: string, data: ScrapeDifferential) {
    return `${traderId} has opened ${data.opened.length} and closed ${data.closed.length} positions.`;
}

(async () => {
    const scraper = Scraper.getInstance(process.env.APIFY_KEY);
    const curatedTraders = await Database.getCuratedTraders();
    const result = await Promise.all(
        curatedTraders.map(async (trader) => {
            // Todo: Note: can i use the array of profiles to accelerate scrapes ?
            // Todo: Note: This also mitigates the flood of requests to the API when sending a message
            const data = await scraper.scrapeProfile([trader.id]);
            const { positions } = data;
            console.log(`${name} has a position of ${positions}`);
            const previousPositions = await cache.getPositions(trader.id);
            await cache.setTrader(trader.id, positions);
            return { traderId: trader.id, data: scrapeDifferential(previousPositions, positions) };

            // Todo send notification here ?
        }),
    );
    console.log(result);

    // Todo: setup a message queue with redis, telegram wont like 500 message in a row

    result.map(async (res) => {
        const followers = await Database.getFollowers(res.traderId);
        followers.map(async (follower) => {
            const formattedMessage = await formatMessage(res.traderId, res.data);
            await sendMessage(follower.User.telegramId, formattedMessage);
        });
    });
})();
