/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserSubscription } from '../models/UserSubscription';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PaymentService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all user subscriptions
     * @returns UserSubscription A successful response.
     * @throws ApiError
     */
    public getPayments(): CancelablePromise<Array<UserSubscription>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/payment/',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * Create a new subscription
     * @param requestBody Payment object that needs to be added to the store
     * @returns any A successful response.
     * @throws ApiError
     */
    public createPayment(
        requestBody: {
            /**
             * Subscription ID
             */
            subscriptionId: string;
            /**
             * Provider
             */
            provider: 'payline' | 'stripe';
            /**
             * Offer ID
             */
            offerId?: string;
        },
    ): CancelablePromise<({
        /**
         * Checkout URL
         */
        url: string;
    } | {
        /**
         * Payline token
         */
        token: string;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/payment/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * Get a single subscription
     * @param id User Subscription ID
     * @returns UserSubscription A successful response.
     * @throws ApiError
     */
    public getPaymentById(
id: number,
): CancelablePromise<UserSubscription> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/payment/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * Update a subscription
     * @param id User Subscription ID
     * @param requestBody Payment object that needs to be updated in the store
     * @returns UserSubscription A successful response.
     * @throws ApiError
     */
    public updatePayment(
id: number,
requestBody: {
/**
 * Subscription ID
 */
subscriptionId?: string;
/**
 * Offer ID
 */
offerId?: string;
},
): CancelablePromise<UserSubscription> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/payment/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * Delete a subscription
<<<<<<< HEAD
     * @param id User Subscription ID
     * @returns void
=======
     * @param id Subscription ID
     * @returns void
>>>>>>> d016050 (Create basic component for podcast)
     * @throws ApiError
     */
    public deletePayment(
id: number,
): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/payment/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * Get a single subscription
     * @param id Subscription ID
     * @returns any A successful response.
     * @throws ApiError
     */
    public fetchPaymentById(
id: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/payment/payment/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }

}