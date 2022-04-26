import { Position } from '@shared/scraper/types';
import { createClient } from 'redis';
import configuration from '../configuration';
import EventEmitter from 'events';

export default class Cache extends EventEmitter {
    private client;

    constructor() {
        super();
        this.client = createClient({ url: configuration.REDIS_URL });
    }

    async getPositions(traderId: string): Promise<Position[]> {
        return (await this.client.hGetAll(traderId)) as Position[];
    }

    async setTrader(traderId: string, positions: Position[]) {
        await this.client.hSet(traderId, 'positions', positions);
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
