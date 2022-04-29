/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Broker } from '../models/Broker';
import type { Error } from '../models/Error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BrokerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all brokers
     * @returns Broker A successful response.
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public getBrokers(): CancelablePromise<Array<Broker> | Error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/broker',
        });
    }

    /**
     * Create a new broker
     * @param requestBody Broker to create
     * @returns Error Unexpected error
     * @returns Broker A successful response.
     * @throws ApiError
     */
    public createBroker(
        requestBody: (Broker & {
            image?: string;
        }),
    ): CancelablePromise<Error | Broker> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/broker',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a broker
     * @param id Broker id
     * @returns Broker A successful response.
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public getBroker(
        id: number,
    ): CancelablePromise<Broker | Error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/broker/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a broker
     * @param id Broker id
     * @param requestBody Broker to update
     * @returns Broker A successful response.
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public updateBroker(
        id: number,
        requestBody: (Broker & {
            image?: string;
        }),
    ): CancelablePromise<Broker | Error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/broker/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a broker
     * @param id Broker id
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public deleteBroker(
        id: number,
    ): CancelablePromise<Error> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/broker/{id}',
            path: {
                'id': id,
            },
        });
    }

}