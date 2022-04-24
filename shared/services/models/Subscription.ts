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
    createdAt?: string;
    updatedAt?: string;
};
