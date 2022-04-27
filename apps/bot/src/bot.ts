// telegram bot

// send message to telegram

import configuration from '../configuration';
import Cache from './cache';
import EventEmitter from 'events';
import axios from 'axios';

// const cache = new Cache();
export default class TelegramBot {
    // Listen

    private _lockUpdate = new EventEmitter();
    private cache: Cache;

    constructor() {
        // Instantiated bot
        this.cache = new Cache();
    }

    private _lock = false;

    private get lock() {
        return this._lock;
    }

    private set lock(value) {
        if (value !== true) {
            this._lockUpdate.emit('locked');
        } else {
            this._lockUpdate.emit('unlocked');
        }
        this._lock = value;
    }

    private static async sendMessage(chatId, message) {
        console.log('sending message');
        return axios(`https://api.telegram.org/bot${configuration.TELEGRAM_TOKEN}/sendMessage`, {
            method: 'POST',
            data: {
                chat_id: '@vanerac' || chatId,
                text: message,
            },
        });
    }

    public async listenMessageQueue(cacheInstance: Cache): Promise<void> {
        // Listener on the message queue
        cacheInstance.on('message_add', () => {
            //  call this.consumeMessageQueue()
            // Function must not be ran in parallel
            console.log('Got a new message to send');
            if (this.lock) {
                return;
            } else this.consumeMessageQueue();
        });

        this._lockUpdate.on('unlocked', () => {
            //  call this.consumeMessageQueue()
            // Function must not be ran in parallel
            console.log('Queue unlocked');
            this.consumeMessageQueue();
        });
    }

    private async consumeMessageQueue() {
        // The bot sends messages to the queue and this function handles sending the messages
        // The function must respect the telegram rate limit

        this.lock = true;
        // Get the message from the cache
        const message = await this.cache.getMessage(); // message is popped from queue
        // If there is no message, return
        if (!message) {
            this.lock = false;
            return;
        }
        // Send the message to the telegram bot
        try {
            await TelegramBot.sendMessage(message.chatId, message.message);
        } catch (error) {
            console.log(error);
            // If its a rate limit, wait for a second and try again
            if (error.response.status === 429) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                await TelegramBot.sendMessage(message.chatId, message.message);
            }
        }
        this.lock = false;
        console.log('Message sent');
    }
}
