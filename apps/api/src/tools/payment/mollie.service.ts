import { CallbackConfig, PaymentOptions, PaymentService, PaymentType } from './payment.service';
import createMollieClient from '@mollie/api-client';
import configuration from '../../../configuration';
import { User } from '@shared/services';
import { Locale } from '@mollie/api-client/dist/types/src/data/global';
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
        if (opts.paymentType == PaymentType.SUBSCRIPTION) {
            return await mollieClient.customers_subscriptions.create({
                amount: {
                    currency: 'EUR',
                    value: opts.amount.toString(),
                },
                description: opts.description,
                interval: opts.subscription.refreshRate.toString(), // Todo : check if format is right
                startDate: new Date().toISOString(),
                webhookUrl: cbs.statusUrl,
                customerId: opts.clientId,
                testmode: process.env.NODE_ENV === 'development',
            });
        } else if (opts.paymentType == PaymentType.ONETIME) {
            return await mollieClient.payments.create({
                amount: {
                    currency: 'EUR',
                    value: opts.amount.toString(),
                },
                description: opts.description,
                redirectUrl: cbs.statusUrl,
                webhookUrl: cbs.statusUrl,
                customerId: opts.clientId,
                testmode: process.env.NODE_ENV === 'development',
            });
        } else {
            throw new Error('Unknown payment type', opts.paymentType);
        }
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
}
