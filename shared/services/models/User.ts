/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

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
