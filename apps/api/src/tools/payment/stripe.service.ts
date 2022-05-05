import { CallbackConfig, PaymentOptions, PaymentService, User } from './payment.service';

import Stripe from 'stripe';
import configuration from '../../../configuration';
import { PrismaClient } from '@prisma/client';

const stripe = new Stripe(configuration.STRIPE_PK, {
    apiVersion: '2020-08-27',
});

const prisma = new PrismaClient();

export default class StripeService extends PaymentService {
    public static async getCustomer(user: User) {
        let customer;
        const dbUser = await prisma.userSubscription.findFirst({
            where: {
                userId: user.id,
            },
            select: {
                customerId: true,
            },
        });

        if (dbUser?.customerId) {
            customer = await stripe.customers.search({
                query: dbUser.customerId,
            });
        }

        if (!customer)
            customer = await stripe.customers.create({
                name: user.firstName + ' ' + user.lastName,
                email: user.email,
            });

        return customer;
    }

    // https://stripe.com/docs/billing/quickstart
    // https://stripe.com/docs/checkout/quickstart

    public static async createPaymentIntent(opts: PaymentOptions, cbs: CallbackConfig) {
        // create a checkout  session
        // create a product
        // define payment mode
        // Get product
        //const prices = await stripe.prices.list({
        //     lookup_keys: [req.body.lookup_key],
        //     expand: ['data.product'],
        //   });
        // const session = await stripe.checkout.sessions.create({
        // billing_address_collection: 'auto',
        //     line_items: [
        //         {
        //             // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        //             price: 'price_1Kw99VKflO99y6f2w7cbjEcc',
        //             quantity: 1,
        //         },
        //     ],
        // subscription_data: {
        //     trial_period_days: 7,
        // },
        // automatic_tax: { enabled: true },
        //     mode: 'payment' || subscription,
        //     success_url: `${YOUR_DOMAIN}?success=true`,
        //     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        // });
    }

    public static async getPayment(paymentId: string) {}

    public static async cancelSubscription(customerId, paymentId) {}

    public static async createRefund(paymentId: string, amount: number) {}
}
