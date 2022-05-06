/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Offer } from '../models/Offer';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OffersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all offers
     * @returns Offer Offers
     * @throws ApiError
     */
    public getAllOffers(): CancelablePromise<Array<Offer>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/offer/',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * Create offer
     * @param requestBody 
     * @returns Offer Offer created
     * @throws ApiError
     */
    public createOffer(
requestBody: Offer,
): CancelablePromise<Offer> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/offer/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * Get offer by id
     * @param id Offer ID
     * @returns Offer Offer
     * @throws ApiError
     */
    public getOfferById(
id: number,
): CancelablePromise<Offer> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/offer/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Offer not found`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * Update offer by id
     * @param id Offer ID
     * @param requestBody 
     * @returns Offer Offer
     * @throws ApiError
     */
    public updateOfferById(
id: number,
requestBody: Offer,
): CancelablePromise<Offer> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/offer/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Offer not found`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * Delete offer by id
     * @param id Offer ID
     * @returns void 
     * @throws ApiError
     */
    public deleteOfferById(
id: number,
): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/offer/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Offer not found`,
                500: `Internal server error`,
            },
        });
    }

}