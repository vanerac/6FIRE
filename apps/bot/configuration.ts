import dotenv from 'dotenv';

dotenv.config();

export default {
    TOKEN: process.env.TOKEN ?? '',
    ACTOR_URL: process.env.ACTOR_URL ?? 'tugkan/binance-futures-leaderboard',
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN ?? '',
};
