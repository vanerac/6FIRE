// telegram bot

// send message to telegram

import configuration from '../configuration';

// TOdo: add telegram bot
export default function sendMessage(chatId, message) {
    return fetch(`https://api.telegram.org/bot${configuration.TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    });
}
