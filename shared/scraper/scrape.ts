import {ApifyClient} from 'apify-client';
import * as querystring from 'querystring';
import {Trader} from "./types";
import * as Sentry from "@sentry/node";

export class Scraper {
    private static instance: Scraper;
    private ApifyClient: ApifyClient;
    private readonly actor = 'tugkan/binance-futures-leaderboard';

    private constructor(private token: string) {
        console.log('Scraper constructor', token);
        this.ApifyClient = new ApifyClient({
            token,
        });
    }

    static getInstance(apiKey: string): Scraper {
        if (this.instance) {
            return this.instance;
        }
        return this.instance = new Scraper(apiKey)
    }

    async scrapeLeaderboards(): Promise<Trader[]> {
        const periodMap = ['MONTHLY', 'EXACT_MONTHLY'];
        const levelMap = ['LEVEL1', 'LEVEL2', 'LEVEL3', 'LEVEL4', 'LEVEL5'];

        const urlBase = 'https://www.binance.com/en/futures-activity/leaderboard';
        const transaction = Sentry.startTransaction({
            op: 'scrape',
            name: 'scrape leaderboards',
        });
        try {
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
                            includePositions: true,
                        };
                        return {
                            url: `${urlBase}?${querystring.stringify(params)}`,
                            method: 'GET',
                        };
                    });
                })
                .flat(Infinity);

            console.log(urls);

            const options = {
                startUrls: urls,
                useOnlyStartUrls: true,
                customMapFunction: '(object) => ({...object})',
                maxItems: 200,
                proxy: {
                    useApifyProxy: true,
                },
            };

            const {defaultDatasetId} = await this.ApifyClient.actor(this.actor).call(options);

            const {items} = await this.ApifyClient.dataset(defaultDatasetId).listItems();

            return items as any[];
        } finally {
            transaction.finish();
        }
    }

    async scrapeProfile(profileIds: string[]): Promise<Trader> {
        const transaction = Sentry.startTransaction({
            op: 'scrape',
            name: 'scrape positions',
        });
        try {
            const urls = profileIds.map((profileId) => {
                return {
                    url: `https://www.binance.com/fr/futures-activity/leaderboard?type=myProfile&tradeType=PERPETUAL&encryptedUid=${profileId}`,
                    method: 'GET',
                };
            });

            const options = {
                startUrls: urls,
                useOnlyStartUrls: true,
                customMapFunction: '(object) => ({...object})',
                maxItems: 200,
                proxy: {
                    useApifyProxy: true,
                },
            };

            const {defaultDatasetId} = await this.ApifyClient.actor(this.actor).call(options);

            const {items} = await this.ApifyClient.dataset(defaultDatasetId).listItems();

            return items as any;
        } finally {
            transaction.finish();
        }

    }
}
