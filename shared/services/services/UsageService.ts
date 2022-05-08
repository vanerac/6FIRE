/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OfferUsage } from '../models/OfferUsage';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsageService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get usage by ID
     * @param id Usage ID
     * @returns OfferUsage Usage
     * @throws ApiError
     */
    public getUsageById(
id: number,
): CancelablePromise<OfferUsage> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/offer/usage/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * Get all usage
     * @returns OfferUsage Usage
     * @throws ApiError
     */
    public getAllUsage(): CancelablePromise<Array<OfferUsage>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/offer/usage/',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Internal server error`,
            },
        });
    }

}