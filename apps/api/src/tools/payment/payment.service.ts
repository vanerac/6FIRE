export enum PaymentType {
    // eslint-disable-next-line no-unused-vars
    SUBSCRIPTION,
    // eslint-disable-next-line no-unused-vars
    ONETIME,
}

export interface PaymentOptions {
    clientId: string;
    amount: number;
    currency: string;
    description: string;
    userSubscriptionId?: string;
    paymentType: PaymentType;
    subscription?: Subscription;
    paymentMethod?: string;
    paymentMethodId?: string;
    paymentMethodType?: string;
    metadata?: {
        [key: string]: string;
    };
}

export interface CallbackConfig {
    successUrl: string;
    failUrl: string;
    cancelUrl: string;
    statusUrl: string;
}

export type User = {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    telephone?: string;
    countryId?: number;
    createdAt?: string;
    updatedAt?: string;
    isAdmin?: boolean;
    verifiedEmail?: boolean;
    verifiedPhone?: boolean;
    banned?: boolean;
    note?: string;
    UserSubscription?: Array<{
        Subscription?: {
            name?: string;
        };
        status?: string;
    }>;
};

export type Subscription = {
    id?: number;
    name: string;
    description: string;
    refreshRate?: number;
    subscriptionType: string;
    price: number;
    level: number;
    hidden?: boolean;
    isBestValue?: boolean;
    hasFreeTrial?: boolean;
    freeTrialDays?: number;
    createdAt?: string;
    updatedAt?: string;
};

export abstract class PaymentService {
    // eslint-disable-next-line no-unused-vars,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line no-unused-vars
    public static cancelSubscription: (customerId, paymentId) => Promise<any>;

    // eslint-disable-next-line no-unused-vars,@typescript-eslint/ban-ts-comment
    // @ts-ignore

    // eslint-disable-next-line no-unused-vars
    public static getCustomer: (user: User) => Promise<any>;

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
