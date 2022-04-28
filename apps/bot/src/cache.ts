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
        return this.instance;
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

    async addMessage(chatId: number, message: string) {
        const parsedData = JSON.stringify({ chatId, message });
        await this.client.sendCommand(['RPUSH', 'pending_messages', parsedData]);
        this.emit('message_add', parsedData);
    }

    async getMessage(): Promise<{ chatId: number; message: string } | null> {
        const data = await this.client.sendCommand(['LPOP', 'pending_messages']);
        if (data) {
            return JSON.parse(data);
        } else {
            return null;
        }
    }
}
