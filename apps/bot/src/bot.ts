// telegram bot

// send message to telegram

import configuration from '../configuration';
import Cache from './cache';
import EventEmitter from 'events';
import * as Sentry from '@sentry/node';

const cache = new Cache();
export default class TelegramBot {
    // Listen

    private _lockUpdate = new EventEmitter();

    constructor() {
        // Instantiated bot
    }

    private _lock = false;

    private get lock() {
        return this._lock;
    }

    private set lock(value) {
        if (this._lock !== true) {
            this._lockUpdate.emit('locked');
        } else {
            this._lockUpdate.emit('unlocked');
        }
        this._lock = value;
    }

    private static async sendMessage(chatId, message) {
        const transaction = Sentry.startTransaction({
            op: 'http',
            name: 'send message',
        });
        try {
            return fetch(`https://api.telegram.org/bot${configuration.TELEGRAM_TOKEN}/sendMessage`, {
                method: 'POST',
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            });
        } finally {
            transaction.finish();
        }
    }

    public async listenMessageQueue(): Promise<void> {
        // Listener on the message queue
        cache.on('message_add', () => {
            //  call this.consumeMessageQueue()
            // Function must not be ran in parallel
            if (this.lock) {
                return;
            } else this.consumeMessageQueue();
        });

        this._lockUpdate.on('unlocked', () => {
            //  call this.consumeMessageQueue()
            // Function must not be ran in parallel
            this.consumeMessageQueue();
        });
    }

    private async consumeMessageQueue() {
        // The bot sends messages to the queue and this function handles sending the messages
        // The function must respect the telegram rate limit

        this.lock = true;
        // Get the message from the cache
        const message = await cache.getMessage(); // message is popped from queue
        // If there is no message, return
        if (!message) {
            this.lock = false;
            return;
        }
        console.log('Sending message');
        // Send the message to the telegram bot
        try {
            await TelegramBot.sendMessage(message.chatId, message.message);
        } catch (error) {
            // If its a rate limit, wait for a second and try again
            if (error.response.status === 429) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                await TelegramBot.sendMessage(message.chatId, message.message);
            }
        }
        console.log('Message sent');
    }
}
