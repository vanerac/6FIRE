import { CallbackConfig, PaymentOptions, PaymentService, User } from './payment.service';

import Stripe from 'stripe';
import configuration from '../../../configuration';
import { PrismaClient } from '@prisma/client';

export const stripe = new Stripe(configuration.STRIPE_SK, {
    apiVersion: '2020-08-27',
});

const prisma = new PrismaClient();

export default class StripeService extends PaymentService {
    public static async getCustomer(user: User) {
        let customer;
        console.log('Fetching stripe customer for user', user.id);
        const dbUser = await prisma.userSubscription.findFirst({
            where: {
                userId: user.id,
            },
            select: {
                customerId: true,
                id: true,
                User: {
                    select: {
                        email: true,
                        firstName: true,
                        lastName: true,
                    },
                },
            },
        });

        if (dbUser?.customerId) {
            console.log('Existing stripe customer', dbUser.customerId);
            console.log(dbUser.customerId);
            const customers = await stripe.customers.search({
                query: `email:'${dbUser.User.email}'`,
            });

            console.log('Customers', customers);
            if (customers.data.length > 0) [customer] = customers.data;
            console.log(customer);
            console.log('Fetched stripe customer', customer?.id);
        }

        if (!customer) {
            console.log('Creating new stripe customer');
            customer = await stripe.customers.create({
                name: dbUser.User.firstName + ' ' + dbUser.User.lastName,
                email: dbUser.User.email,
            });
            console.log('Created stripe customer', customer.id);
        }

        return customer;
    }

    public static async createPaymentIntent(opts: PaymentOptions, cbs: CallbackConfig) {
        // create a checkout  session
        // create a product
        // define payment mode
        // Get product
        console.log('Creating payment intent');
        const prices = await StripeService.getPrices(opts.subscription.id);
        console.log('Prices', prices);

        const params = {
            billing_address_collection: 'auto',
            success_url: cbs.successUrl,
            cancel_url: cbs.cancelUrl,
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: prices.id,
                    quantity: 1,
                },
            ],
            // automatic_tax: { enabled: true },
        };

        if (opts.subscription.subscriptionType === 'SUBSCRIPTION') {
            Object.assign(params, {
                mode: 'subscription',
            });
        } else {
            Object.assign(params, {
                mode: 'payment',
            });
        }

        console.log(params);

        const session = await stripe.checkout.sessions.create(params as any);

        console.log('Created session', session);
        await StripeService.verifyWebhook(cbs.statusUrl);
        console.log('Verified webhook');

        return { ...session, getCheckoutUrl: () => session.url };
    }

    // https://stripe.com/docs/billing/quickstart
    // https://stripe.com/docs/checkout/quickstart

    public static async getPayment(paymentId: string) {}

    public static async cancelSubscription(customerId, paymentId) {
        const subscription = await stripe.subscriptions.retrieve(paymentId);
        await stripe.subscriptions.update(paymentId, { cancel_at_period_end: true });
        return subscription;
    }

    public static async createRefund(paymentId: string, amount: number) {}

    private static async verifyWebhook(webhookUrl: string) {
        const webhook = await prisma.config.findFirst({
            where: {
                key: 'stripe_webhook_url',
                value: webhookUrl,
            },
        });

        if (!webhook) {
            const stripeWebhook = await stripe.webhookEndpoints.create({
                url: webhookUrl,
                enabled_events: [
                    'checkout.session.completed',
                    'checkout.session.async_payment_succeeded',
                    'checkout.session.async_payment_failed',
                    'customer.subscription.deleted',
                    'customer.subscription.updated',
                    // 'customer.subscription.trial_will_end',
                ],
            });
            console.log('Created stripe webhook', stripeWebhook.id, 'with secret', stripeWebhook.secret);

            await prisma.config.upsert({
                where: {
                    key: 'stripe_webhook_url',
                },
                create: {
                    key: 'stripe_webhook_url',
                    value: webhookUrl,
                },
                update: {
                    key: 'stripe_webhook_url',
                    value: webhookUrl,
                },
            });

            await prisma.config.upsert({
                where: {
                    key: 'stripe_webhook_id',
                },
                create: {
                    key: 'stripe_webhook_id',
                    value: stripeWebhook.id,
                },
                update: {
                    key: 'stripe_webhook_id',
                    value: stripeWebhook.id,
                },
            });

            await prisma.config.upsert({
                where: {
                    key: 'stripe_webhook_secret',
                },
                create: {
                    key: 'stripe_webhook_secret',
                    value: stripeWebhook.secret,
                },
                update: {
                    key: 'stripe_webhook_secret',
                    value: stripeWebhook.secret,
                },
            });
        }
    }

    private static async getProduct(productKey: string) {
        console.log('Fetching product', productKey);

        const products = await stripe.products.list({});

        console.log('Found products', products.data);

        const product = products.data.find((p) => p.name === productKey);
        // const product = await stripe.products.retrieve(productKey).catch(() => console.log('Product not found'));

        if (!product) {
            console.log('Creating product', productKey);
            const product = await stripe.products.create({
                name: productKey,
                type: 'service',
            });
            console.log('Created product', product.id);
            return product;
        } else return product;
    }

    private static async getPrices(subscriptionId: number) {
        const subscription = await prisma.subscription.findFirst({
            where: {
                id: subscriptionId,
            },
        });

        // Todo: add price in case they change the price
        const prices = await stripe.prices.list({
            lookup_keys: [subscription.name + '_' + subscription.price],
            expand: ['data.product'],
        });

        console.log('Fetched prices', prices.data);

        const selectedPrice = prices.data.find((price) => price.unit_amount == subscription.price);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!selectedPrice) {
            console.log('Creating new price');
            const product = await StripeService.getProduct(subscription.name);
            const params = {
                active: true,
                currency: 'eur',
                lookup_key: subscription.name + '_' + subscription.price,
                unit_amount: subscription.price,
                product: product.id,
            };

            if (subscription.subscriptionType === 'SUBSCRIPTION') {
                Object.assign(params, {
                    recurring: {
                        interval: 'month',
                        interval_count: 1,
                        usage_type: 'licensed',
                    },
                });
            }

            return await stripe.prices.create(params);
        } else {
            console.log('Found price', selectedPrice.id);
            return selectedPrice;
        }
    }
}
