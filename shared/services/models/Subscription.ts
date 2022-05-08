/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

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
    paymentProvider: "stripe" | "payline";
    freeTrialDays?: number;
    createdAt?: string;
    updatedAt?: string;
    subscriptionProvider?: string;
};
