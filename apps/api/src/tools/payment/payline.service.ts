import { CallbackConfig, PaymentOptions, PaymentService, PaymentType } from './payment.service';
import { User } from '@shared/services';
import {
    Payline,
    PaylineAction,
    PaylineCurrency,
    PaylineDeliveryMode,
    PaylineDoWebPaymentRequest,
    PaylineMode,
    PaylineWeb,
} from '@playmoweb/payline-typescript-sdk';
import configuration from '../../../configuration';

const paylineConfig = new Payline(
    configuration.PAYLINE_MERCHANT_ID,
    configuration.PAYLINE_SECRET_KEY,
    configuration.PAYLINE_CONTRACT_NUMBER,
    {}, // Options
    true,
    true,
);

const paylineWebService = new PaylineWeb(paylineConfig);

export default class PaylineService implements PaymentService {
    public static async getCustomer(user: User) {
        // create wallet ?
    }

    public static async createPaymentIntent(opts: PaymentOptions, cbs: CallbackConfig) {
        // create payment intent

        const paymentRequest = new PaylineDoWebPaymentRequest(opts.userSubscriptionId)
            .setCallbackUrls(cbs.successUrl, cbs.cancelUrl, cbs.statusUrl)
            .setOrderDetails(PaylineDeliveryMode.DigitalGoods)
            .setAmount(opts.amount, PaylineCurrency.EUR);

        // Todo: ?? is this needed ?
        if (opts.clientId) {
            paymentRequest.setWalletId(opts.clientId);
        }
        if (opts.paymentType == PaymentType.SUBSCRIPTION)
            paymentRequest.setPaymentDetails(PaylineAction.AuthCaptureRecurring, PaylineMode.RECURRING);
        else if (opts.paymentType == PaymentType.ONETIME)
            paymentRequest.setPaymentDetails(PaylineAction.AuthCapture, PaylineMode.FULL);

        try {
            const v = await paylineWebService.doWebPayment(paymentRequest);
            return {
                id: v.token,
            };
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    public static async cancelSubscription($customerId, $paymentId) {
        // Todo cancel subscription
    }

    public static async getPayment(paymentId) {
        // get payment
    }
}
