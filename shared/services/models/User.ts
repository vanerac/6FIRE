/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type User = {
    id?: number;
    userId?: string;
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
    UserSubscription?: {
        Subscription?: {
            name?: string;
        };
    };
};
