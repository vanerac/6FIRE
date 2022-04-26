import { Position } from '@shared/scraper/types';
import { createClient } from 'redis';
import configuration from '../configuration';
import EventEmitter from 'events';
import * as Sentry from '@sentry/node';

export default class Cache extends EventEmitter {
    private client;

    constructor() {
        super();
        this.client = createClient({ url: configuration.REDIS_URL });
    }

    async getPositions(traderId: string): Promise<Position[]> {
        const transaction = Sentry.startTransaction({
            op: 'cache',
            name: 'Get Trader Positions',
        });
        try {
            return (await this.client.hGetAll(traderId)) as Position[];
        } finally {
            transaction.finish();
        }
    }

    async setTrader(traderId: string, positions: Position[]) {
        const transaction = Sentry.startTransaction({
            op: 'cache',
            name: 'Set Trader Positions',
        });
        try {
            await this.client.hSet(traderId, 'positions', positions);
        } finally {
            transaction.finish();
        }
    }

    async addMessage(chatId: string, message: string) {
        const transaction = Sentry.startTransaction({
            op: 'cache',
            name: 'Add Message',
        });
        try {
            this.emit('message_add');
            console.log('Message Added to queue');
            await this.client.rpush('pending_messages', { message, chatId });
        } finally {
            transaction.finish();
        }
    }

    async getMessage(): Promise<{ chatId: string; message: string }> {
        const transaction = Sentry.startTransaction({
            op: 'cache',
            name: 'Get Message',
        });
        try {
            return await this.client.lpop('pending_messages');
        } finally {
            transaction.finish();
        }
    }
}
