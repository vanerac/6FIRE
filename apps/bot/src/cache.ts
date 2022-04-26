import { Position } from '@shared/scraper/types';
import { createClient } from 'redis';
import configuration from '../configuration';

export default class Cache {
    private client;

    constructor() {
        this.client = createClient({ url: configuration.REDIS_URL });
    }

    async getPositions(traderId: string): Promise<Position[]> {
        return (await this.client.hGetAll(traderId)) as Position[];
    }

    async setTrader(traderId: string, positions: Position[]) {
        await this.client.hSet(traderId, 'positions', positions);
    }
}
