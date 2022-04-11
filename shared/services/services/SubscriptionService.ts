/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Subscription } from '../models/Subscription';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SubscriptionService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a subscription
     * @param requestBody Subscription object that needs to be created
     * @returns Subscription Successfully created
     * @throws ApiError
     */
    public createSubscription(
        requestBody: Subscription,
    ): CancelablePromise<Subscription> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/subscription/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all subscriptions
     * @returns Subscription List of subscriptions
     * @throws ApiError
     */
    public getSubscriptions(): CancelablePromise<Array<Subscription>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/subscription/',
        });
    }

    /**
     * Get a subscription by id
     * @param id Subscription id
     * @returns Subscription A single subscription
     * @throws ApiError
     */
    public getSubscriptionById(
        id: number,
    ): CancelablePromise<Subscription> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/subscription/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a subscription by id
     * @param id Subscription id
     * @param requestBody Subscription object that needs to be updated
     * @returns Subscription Successful operation
     * @throws ApiError
     */
    public updateSubscriptionById(
        id: number,
        requestBody: Subscription,
    ): CancelablePromise<Subscription> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/subscription/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a subscription by id
     * @param id Subscription id
     * @returns void
     * @throws ApiError
     */
    public deleteSubscriptionById(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/subscription/{id}',
            path: {
                'id': id,
            },
        });
    }

}