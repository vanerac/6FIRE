import dotenv from 'dotenv';

dotenv.config();

export default {
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    OPENAPI_SPEC_DEFINITION: process.env.OPENAPI_SPEC ?? '../../../shared/generated/openapi-v1.json',
    EMAIL_SENDER: process.env.EMAIL_SENDER ?? 'no-reply@6fireinvest.com',
    SMS_SENDER: process.env.SMS_SENDER ?? '6FIREINVEST',
    SMS_API_KEY: process.env.SMS_API_KEY ?? '',
    UPLOAD_DIR: process.env.UPLOAD_DIR ?? '../../data/uploads',
    COINMARKETCAP_API_KEY: process.env.COIN_MARKET_API_KEY ?? '',
    APIFY_API_KEY: process.env.APIFY_API_KEY ?? '',
};
