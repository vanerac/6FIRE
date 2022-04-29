/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CryptoHolding } from '../models/CryptoHolding';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CryptoService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns any A successful response.
     * @throws ApiError
     */
    public getAllCrypto(): CancelablePromise<{
        cryptos: CryptoHolding;
        messages: {
            id?: number;
            message?: string;
            date?: string;
            required?: any;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/crypto',
            errors: {
                400: `Invalid ID supplied`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Crypto not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns CryptoHolding A successful response.
     * @throws ApiError
     */
    public setCryptos(
        requestBody: Array<CryptoHolding>,
    ): CancelablePromise<Array<CryptoHolding>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/crypto/cryptos',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid ID supplied`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Crypto not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns any A successful response.
     * @throws ApiError
     */
    public setMessage(
        requestBody: {
            message?: string;
        },
    ): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/crypto/message',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid ID supplied`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Crypto not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param query Search query
     * @returns CryptoHolding A successful response.
     * @throws ApiError
     */
    public searchCrypto(
        query: string,
    ): CancelablePromise<Array<CryptoHolding>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/crypto/searchCoin',
            query: {
                'query': query,
            },
            errors: {
                400: `Invalid ID supplied`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Crypto not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param id Crypto ID
     * @returns any A successful response.
     * @throws ApiError
     */
    public getCoinValue(
        id: string,
    ): CancelablePromise<{
        value?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/crypto/{id}/value',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Crypto not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param id Crypto ID
     * @returns any A successful response.
     * @throws ApiError
     */
    public getCryptoImage(
        id: string,
    ): CancelablePromise<{
        image?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/crypto/coinImg/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Crypto not found`,
                500: `Internal Server Error`,
            },
        });
    }

}