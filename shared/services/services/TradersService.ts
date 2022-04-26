/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Trader } from '../models/Trader';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TradersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get curation
     * @returns Trader Success
     * @throws ApiError
     */
    public getTraderCuration(): CancelablePromise<Array<Trader>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trader/curation',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update curation
     * @param requestBody
     * @returns Trader Success
     * @throws ApiError
     */
    public updateTraderCuration(
        requestBody?: Array<Trader>,
    ): CancelablePromise<Trader> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/trader/curation',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Follow a trader
     * @param id Trader ID
     * @returns Trader Success
     * @throws ApiError
     */
    public followTrader(
        id: number,
    ): CancelablePromise<Trader> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trader/trader/{id}/follow',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Unfollow a trader
     * @param id Trader ID
     * @returns Trader Success
     * @throws ApiError
     */
    public unfollowTrader(
        id: number,
    ): CancelablePromise<Trader> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/trader/trader/{id}/follow',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Get the list of traders followed by the current user
     * @returns Trader Success
     * @throws ApiError
     */
    public getTraderFollowing(): CancelablePromise<Array<Trader>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trader/trader/following',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * get a list of user following a trader
     * @param id Trader ID
     * @returns Trader Success
     * @throws ApiError
     */
    public getTraderFollowers(
        id: number,
    ): CancelablePromise<Array<Trader>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trader/trader/{id}/followers',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Get the top traders from Binance
     * @param limit Limit
     * @returns Trader Success
     * @throws ApiError
     */
    public getTopTraders(
        limit?: number,
    ): CancelablePromise<Array<Trader>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trader/curation/top',
            query: {
                'limit': limit,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Search for a trader on Binance
     * @param query Query
     * @param limit Limit
     * @returns Trader Success
     * @throws ApiError
     */
    public searchTrader(
        query: string,
        limit?: number,
    ): CancelablePromise<Array<Trader>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trader/curation/search',
            query: {
                'query': query,
                'limit': limit,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

}