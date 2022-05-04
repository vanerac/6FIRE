import { CallbackConfig, PaymentOptions, PaymentService, PaymentType, Subscription } from './payment.service';
import createMollieClient, { Locale, MandateMethod } from '@mollie/api-client';
import configuration from '../../../configuration';
import { User } from '@shared/services';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const mollieClient = createMollieClient({ apiKey: configuration.MOLLIE_API_KEY });

export default class MollieService implements PaymentService {
    public static async getCustomer(user: User) {
        let customer;
        const dbCustomer = await prisma.userSubscription.findFirst({
            where: {
                userId: user.id,
            },
            select: {
                customerId: true,
            },
        });
        if (dbCustomer?.customerId) {
            customer = await mollieClient.customers.get(dbCustomer.customerId);
        }

        if (!customer)
            customer = await mollieClient.customers.create({
                name: user.firstName,
                email: user.email,
                locale: Locale.fr_FR,
                metadata: {
                    userId: user.id.toString(),
                },
            });

        return customer;
    }

    public static async createPaymentIntent(opts: PaymentOptions, cbs: CallbackConfig) {
        console.log('mollie createPaymentIntent', opts, cbs);
        // opts.paymentType = PaymentType.ONETIME;

        const paymentOptions = {
            amount: {
                currency: 'EUR',
                value: opts.amount.toFixed(2).toString(),
            },
            description: opts.description,
            redirectUrl: cbs.successUrl,
            webhookUrl: cbs.statusUrl,
            customerId: opts.clientId,
            // testmode: process.env.NODE_ENV === 'development',
        };

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (opts.paymentType == PaymentType.SUBSCRIPTION) {
            Object.assign(paymentOptions, {
                sequenceType: 'first',
            });
        }
        return await mollieClient.payments.create(paymentOptions);
    }

    public static async cancelSubscription(customerId, paymentId) {
        const payment = await mollieClient.payments.get(paymentId);
        const subscription = await mollieClient.payments.cancel(payment.subscriptionId);
        return subscription;
    }

    public static async getPayment(paymentId) {
        const payment = await mollieClient.payments.get(paymentId);
        return payment;
    }

    public static async refund(paymentId) {
        // const payment = await mollieClient.payments.get(paymentId);
        // const refund = await mollieClient.payments.refund(payment.id);
        // return refund;
    }

    public static async createSubscription(id: number, customerId: string, subscription: Subscription) {
        // create mandate
        // create subscription

        let interval;
        if (subscription.refreshRate % 30 === 0) {
            interval = `${subscription.refreshRate / 30} months`;
        } else {
            interval = `${subscription.refreshRate} days`;
        }

        // Start date is the next payment date
        // Now + interval
        const startDate = (
            process.env.NODE_ENV === 'production'
                ? new Date(Date.now() + subscription.refreshRate * 24 * 60 * 60 * 1000)
                : new Date()
        )
            .toISOString()
            .substring(0, 10);

        const mandate = await mollieClient.customers_mandates.create({
            customerId: customerId,
            consumerName: configuration.CONSUMER_NAME,
            method: MandateMethod.directdebit,
            consumerAccount: configuration.CONSUMER_ACCOUNT, // TODO
        });

        const sub = await mollieClient.customers_subscriptions.create({
            amount: {
                currency: 'EUR',
                value: '10.00',
            },
            description: Math.random().toString(),
            interval,
            startDate,
            mandateId: mandate.id,
            customerId: customerId,
        });

        await prisma.userSubscription.update({
            where: {
                id,
            },
            data: {
                extSubscriptionId: sub.id,
            },
        });
    }
}
