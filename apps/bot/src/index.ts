import { Scraper } from './scrape';
import dotenv from 'dotenv';

dotenv.config();
/* Todo:
 *  - Implement database fetching
 *  - Implement position Caching with redis
 */

(async () => {
    const scraper = new Scraper(process.env.APIFY_KEY);
    const profiles = await scraper.scrapeLeaderboards();
    console.log(`Got ${profiles.length} profiles`);
    const mappedUrls = profiles.map((profile) => profile.id as string);
    const positions = await scraper.scrapeProfile(mappedUrls);
    console.log(`Got ${positions.length} positions for ${mappedUrls.length} profiles`);
})();
