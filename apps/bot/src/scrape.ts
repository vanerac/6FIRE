import configuration from '../configuration';

import { ApifyClient } from 'apify-client';
import * as querystring from 'querystring';

const client = new ApifyClient({
    token: configuration.TOKEN,
});

export default async function Scrape() {
    const actor = 'tugkan/binance-futures-leaderboard';

    const periodMap = ['MONTHLY', 'EXACT_MONTHLY'];
    const levelMap = ['LEVEL1', 'LEVEL2', 'LEVEL3', 'LEVEL4', 'LEVEL5'];

    const urlBase = 'https://www.binance.com/en/futures-activity/leaderboard';

    const urls = periodMap
        .map((period) => {
            return levelMap.map((level) => {
                const params = {
                    type: 'filterResults',
                    isShared: true,
                    limit: 200,
                    periodType: period,
                    pnlGainType: level,
                    roiGainType: level,
                    sortType: 'ROI',
                    symbol: 'BTCUSDT',
                    tradeType: 'PERPETUAL',
                };
                return {
                    url: `${urlBase}?${querystring.stringify(params)}`,
                    method: 'GET',
                };
            });
        })
        .flat(Infinity);

    console.log(`urls: ${urls}`);

    const options = {
        startUrls: urls,
        useOnlyStartUrls: true,
        customMapFunction: '(object) => ({...object})',
        maxItems: 200,
        proxy: {
            useApifyProxy: true,
        },
    };

    const { defaultDatasetId } = await client.actor(actor).call(options);

    const { items } = await client.dataset(defaultDatasetId).listItems();
    return items;
}
