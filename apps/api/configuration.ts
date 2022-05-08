import dotenv from 'dotenv';

dotenv.config();

export default {
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    SMS_API_KEY: process.env.SMS_API_KEY ?? '',
    MOLLIE_API_KEY: process.env.MOLLIE_API_KEY ?? '',
    MOLLIE_CONSUMER_NAME: process.env.MOLLIE_CONSUMER_NAME ?? '',
    MOLLIE_CONSUMER_ACCOUNT: process.env.MOLLIE_CONSUMER_ACCOUNT ?? '',
    COINMARKETCAP_API_KEY: process.env.COIN_MARKET_API_KEY ?? '',
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID ?? '',
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY ?? '',
    SENTRY_DSN: process.env.SENTRY_DSN ?? '',
    OPENAPI_SPEC_DEFINITION: process.env.OPENAPI_SPEC ?? '../../../shared/generated/openapi-v1.json',
    EMAIL_SENDER: process.env.EMAIL_SENDER ?? 'no-reply@6fireinvest.com',
    SMS_SENDER: process.env.SMS_SENDER ?? '6FIREINVEST',
    UPLOAD_DIR: process.env.UPLOAD_DIR ?? '../../data/uploads',
    NODE_ENV: process.env.NODE_ENV || 'development',
    BACKEND_URL: process.env.BACKEND_URL ?? 'http://localhost:3333/api',
    PAYLINE_MERCHANT_ID: process.env.PAYLINE_MERCHANT_ID ?? '',
    PAYLINE_SECRET_KEY: process.env.PAYLINE_SECRET_KEY ?? '',
    PAYLINE_CONTRACT_NUMBER: process.env.PAYLINE_CONTRACT_NUMBER ?? '',
    STRIPE_PK: process.env.STRIPE_PK ?? '',
    STRIPE_SK: process.env.STRIPE_SK ?? '',
};
