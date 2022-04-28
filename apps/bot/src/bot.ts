// telegram bot

// send message to telegram

import configuration from '../configuration';
import Cache from './cache';
import EventEmitter from 'events';
import Slimbot from 'slimbot';
import Database from './database';

const slimbot = new Slimbot(configuration.TELEGRAM_TOKEN);

// const cache = new Cache();
export default class TelegramBot {
    // Listen

    private _lockUpdate = new EventEmitter();
    private cache: Cache;

    constructor() {
        // Instantiated bot
        this.cache = new Cache();
        slimbot.startPolling();

        slimbot.on('message', async (message) => {
            if (message.text.match(/^\/start .{36}$/)) {
                const [$commande, code] = message.text.split(' ');
                try {
                    const user = await Database.setUpdateChatId(code, message.chat.id);
                    await slimbot.sendMessage(message.chat.id, 'Compte lie a: ' + user.email);
                } catch (error) {
                    await slimbot.sendMessage(message.chat.id, 'Erreur lors de la verification de votre code');
                }
            } else if (message.text.match('/info')) {
                let user;

                try {
                    user = await Database.getUserFromChatId(message.chat.id);
                    await slimbot.sendMessage(message.chat.id, 'Compte lie a: ' + user.email);
                } catch (error) {
                    await slimbot.sendMessage(message.chat.id, 'Aucun compte lie a cette adresse');
                }
            } else
                await slimbot.sendMessage(
                    message.chat.id,
                    'Commande Invalide. faites `/start {code}` pour commencer a recevoir des notifications',
                );
        });
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
        return slimbot.sendMessage(chatId, message);
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

        // Get the message from the cache
        const message = await this.cache.getMessage(); // message is popped from queue
        // If there is no message, return
        if (!message) {
            // this.lock = false;
            return;
        }
        this.lock = true;
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
