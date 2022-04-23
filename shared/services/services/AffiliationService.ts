/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Affiliation } from '../models/Affiliation';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AffiliationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create Affiliation
     * Create Affiliation
     * @param requestBody
     * @returns Affiliation Affiliation created
     * @throws ApiError
     */
    public createAffiliation(
        requestBody: Affiliation,
    ): CancelablePromise<Affiliation> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/affiliation/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Get Affiliation
     * Get Affiliation
     * @returns Affiliation Affiliation
     * @throws ApiError
     */
    public getAffiliation(): CancelablePromise<Array<Affiliation>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/affiliation/',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Affiliation not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Get Affiliation
     * Get Affiliation
     * @param id
     * @returns Affiliation Affiliation
     * @throws ApiError
     */
    public getAffiliationById(
        id?: string,
    ): CancelablePromise<Affiliation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/affiliation/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Affiliation not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update Affiliation
     * Update Affiliation
     * @param requestBody
     * @param id
     * @returns Affiliation Affiliation
     * @throws ApiError
     */
    public updateAffiliation(
        requestBody: Affiliation,
        id?: string,
    ): CancelablePromise<Affiliation> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/affiliation/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Affiliation not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Delete Affiliation
     * Delete Affiliation
     * @param id
     * @returns void
     * @throws ApiError
     */
    public deleteAffiliation(
        id?: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/affiliation/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Affiliation not found`,
                500: `Internal Server Error`,
            },
        });
    }

}