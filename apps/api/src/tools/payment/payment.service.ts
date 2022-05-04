import { User } from '@shared/services';

export const PaymentType = {
    SUBSCRIPTION: 'SUBSCRIPTION',
    ONETIME: 'ONETIME',
};

export interface PaymentOptions {
    amount: number;
    currency: string;
    description: string;
    userSubscriptionId: string;
    paymentType: string;
    paymentMethod?: string;
    paymentMethodId?: string;
    paymentMethodType?: string;
    metadata: {
        [key: string]: string;
    };
}

export interface CallbackConfig {
    successUrl: string;
    failUrl: string;
    cancelUrl: string;
    statusUrl: string;
}

export abstract class PaymentService {
    // eslint-disable-next-line no-unused-vars,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line no-unused-vars
    public static cancelSubscription: (customerId, paymentId) => Promise<any>;

    // eslint-disable-next-line no-unused-vars,@typescript-eslint/ban-ts-comment
    // @ts-ignore

    // eslint-disable-next-line no-unused-vars
    public static createCustomer: (user: User) => Promise<any>;

    // eslint-disable-next-line no-unused-vars,@typescript-eslint/ban-ts-comment
    // @ts-ignore

    // eslint-disable-next-line no-unused-vars
    public static createPaymentIntent: (opts: PaymentOptions, cbs: CallbackConfig) => Promise<any>;

    // eslint-disable-next-line no-unused-vars,@typescript-eslint/ban-ts-comment
    // @ts-ignore

    // eslint-disable-next-line no-unused-vars
    public static getPaymentStatus: (paymentId: string) => Promise<any>;

    // eslint-disable-next-line no-unused-vars,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line no-unused-vars
    public static getPayment: (paymentId: string) => Promise<any>;

    // eslint-disable-next-line no-unused-vars,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line no-unused-vars
    public static createRefund: (paymentId: string, amount: number) => Promise<any>;
}
