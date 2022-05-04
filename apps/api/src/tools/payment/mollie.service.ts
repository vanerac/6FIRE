import { CallbackConfig, PaymentOptions, PaymentService } from './payment.service';
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

    public static async createPaymentIntent(opts: PaymentOptions, cbs: CallbackConfig) {}

    public static async cancelSubscription(customerId, paymentId) {}

    public static async getPayment(paymentId) {
        const payment = await mollieClient.payments.get(paymentId);
        return payment;
    }
}
