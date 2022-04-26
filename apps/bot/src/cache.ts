export interface Position {
    symbol: string;
    entryPrice: number;
    markPrice: number;
    pnl: number;
    roe: number;
    updateTime: number[];
    amount: number;
    updateTimeStamp: number;
    yellow: boolean;
    tradeBefore: boolean;
}

import { createClient } from 'redis';
import configuration from '../configuration';
import EventEmitter from 'events';

export default class Cache extends EventEmitter {
    private static instance: Cache;
    private client;

    constructor() {
        super();
        this.client = createClient({ url: configuration.REDIS_URL });
        this.client.connect();
    }

    static async getInstance() {
        if (!this.instance) {
            this.instance = new Cache();
            await this.instance.client.connect();
        }
        return Cache.instance;
    }

    static async destroy() {
        if (this.instance) {
            await this.instance.client.quit();
            this.instance = null;
        }
    }

    async getPositions(traderId: string): Promise<Position[]> {
        const { positions } = await this.client.hGetAll(traderId);
        if (positions) {
            return JSON.parse(positions);
        } else {
            return [];
        }
    }

    async setTrader(traderId: string, positions: Position[]) {
        await this.client.hSet(traderId, 'positions', JSON.stringify(positions));
    }

    async addMessage(chatId: string, message: string) {
        this.emit('message_add');
        console.log('Message Added to queue');
        await this.client.rpush('pending_messages', { message, chatId });
    }

    async getMessage(): Promise<{ chatId: string; message: string }> {
        return await this.client.lpop('pending_messages');
    }
}
