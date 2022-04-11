/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CryptoHolding } from '../models/CryptoHolding';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CryptoService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns CryptoHolding A successful response.
     * @throws ApiError
     */
    public getAllCrypto(): CancelablePromise<Array<CryptoHolding>> {
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

}