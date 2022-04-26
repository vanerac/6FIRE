import dotenv from 'dotenv';

dotenv.config();

export default {
    ACTOR_URL: process.env.ACTOR_URL ?? 'tugkan/binance-futures-leaderboard',
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN ?? '',
    REDIS_URL: process.env.REDIS_URL ?? '',
};
