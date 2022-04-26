import dotenv from 'dotenv';

dotenv.config();

export default {
    APIFY_TOKEN: process.env.APIFY_TOKEN ?? '',
    ACTOR_URL: process.env.ACTOR_URL ?? 'tugkan/binance-futures-leaderboard',
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN ?? '',
    REDIS_URL: process.env.REDIS_URL ?? '',
};
