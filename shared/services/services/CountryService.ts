/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Country } from '../models/Country';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CountryService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get country list
     * @returns Country A list of countries
     * @throws ApiError
     */
    public getCountryList(): CancelablePromise<Array<Country>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/country',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * Create new country
     * @param requestBody Country object that needs to be added
     * @returns Country A single country
     * @throws ApiError
     */
    public createCountry(
        requestBody: Country,
    ): CancelablePromise<Country> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/country',
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
     * Get country by ID
     * @param id The ID of a country
     * @returns Country A single country
     * @throws ApiError
     */
    public getCountryById(
        id: string,
    ): CancelablePromise<Country> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/country/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Country not found`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * Update country by ID
     * @param id The ID of a country
     * @param requestBody Country object that needs to be updated
     * @returns Country A single country
     * @throws ApiError
     */
    public updateCountryById(
        id: string,
        requestBody: Country,
    ): CancelablePromise<Country> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/country/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Country not found`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * Delete country by ID
     * @param id The ID of a country
     * @returns void
     * @throws ApiError
     */
    public deleteCountryById(
        id: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/country/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Country not found`,
                500: `Internal server error`,
            },
        });
    }

}