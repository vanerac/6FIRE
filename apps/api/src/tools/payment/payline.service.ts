import { CallbackConfig, PaymentOptions, PaymentService } from './payment.service';
import { User } from '@shared/services';
import { Payline } from '@playmoweb/payline-typescript-sdk';
import configuration from '../../../configuration';

const payline = new Payline(
    configuration.PAYLINE_MERCHANT_ID,
    configuration.PAYLINE_SECRET_KEY,
    configuration.PAYLINE_CONTRACT_NUMBER,
    {}, // Options
    configuration.NODE_ENV === 'production',
    process.env.DEBUG === 'true',
);

export default class PaylineService implements PaymentService {
    public static async createCustomer(user: User) {
        // create wallet ?
    }

    public static async createPaymentIntent(opts: PaymentOptions, cbs: CallbackConfig) {
        // create payment intent
    }

    public static async cancelSubscription(customerId, paymentId) {
        // cancel subscription
    }

    public static async getPayment(paymentId) {
        // get payment
    }
}
