/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserStatus = {
    id?: number;
    email?: string;
    firstName?: string;
    lastName?: string;
    telephone?: string;
    UserSubscription?: {
        Subscription?: {
            name?: string;
            description?: string;
            price?: number;
            level?: number;
        };
    };
};
