/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Offer = {
    id?: number;
    value?: number;
    offerType?: 'PERCENTAGE' | 'FIXED';
    subscriptionId?: number;
    singleUse?: boolean;
};