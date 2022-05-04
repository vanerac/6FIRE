import { CallbackConfig, PaymentOptions, PaymentService, PaymentType } from './payment.service';
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
        opts.paymentType = PaymentType.ONETIME;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (opts.paymentType == PaymentType.SUBSCRIPTION) {
            // create a mandate
            // const mandate = await mollieClient.customers_mandates.create({
            //     customerId: opts.clientId,
            //     consumerName: 'test',
            //     method: MandateMethod.directdebit,
            //     consumerAccount: 'NL91ABNA0417164300',
            // });

            // opts.subscription.refreshRate as number to '1 month'

            let interval = '1 month';
            if (opts.subscription.refreshRate % 30 === 0) {
                interval = `${opts.subscription.refreshRate / 30} months`;
            } else {
                interval = `${opts.subscription.refreshRate} days`;
            }

            return await mollieClient.customers_subscriptions.create({
                amount: {
                    currency: 'EUR',
                    // to format xx.xx
                    value: opts.amount.toFixed(2).toString(),
                },
                description: Math.random().toString(),
                // interval: '1 month',
                interval: interval, // Todo : check if format is right
                // to format yyyy-mm-dd
                startDate: new Date().toISOString().substring(0, 10),
                webhookUrl: cbs.statusUrl,
                customerId: opts.clientId,
                method: MandateMethod.directdebit,
                // mandateId: mandate.id,
                // testmode: process.env.NODE_ENV === 'development',
            });
        } else if (opts.paymentType == PaymentType.ONETIME) {
            return await mollieClient.payments.create({
                amount: {
                    currency: 'EUR',
                    value: opts.amount.toFixed(2).toString(),
                },
                description: opts.description,
                redirectUrl: cbs.statusUrl,
                webhookUrl: cbs.statusUrl,
                customerId: opts.clientId,
                // testmode: process.env.NODE_ENV === 'development',
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
