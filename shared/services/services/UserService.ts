/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Subscription } from '../models/Subscription';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param requestBody
     * @returns User successful operation
     * @throws ApiError
     */
    public createUser(
        requestBody: User,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid user supplied`,
                401: `Unauthorized`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * @returns User successful operation
     * @throws ApiError
     */
    public getUsers(): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/',
            errors: {
                400: `Invalid user supplied`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * @param id ID of user to fetch
     * @returns User A single user item
     * @throws ApiError
     */
    public getUser(
        id: number,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid user supplied`,
                401: `Unauthorized`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * @param id ID of user to fetch
     * @param requestBody
     * @returns User successful operation
     * @throws ApiError
     */
    public updateUser(
        id: number,
        requestBody: User,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid user supplied`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * @param id ID of user to fetch
     * @returns User successful operation
     * @throws ApiError
     */
    public deleteUser(
        id: number,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid user supplied`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * get user subscription
     * @param id ID of the user to subscribe
     * @returns Subscription successful operation
     * @throws ApiError
     */
    public getUserSubscription(
        id: string,
    ): CancelablePromise<Subscription> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/{id}/subscription',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid user supplied`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * update user subscription
     * @param id ID of the user to subscribe
     * @param requestBody
     * @returns Subscription successful operation
     * @throws ApiError
     */
    public updateUserSubscription(
        id: string,
        requestBody: Subscription,
    ): CancelablePromise<Subscription> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/{id}/subscription',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid user supplied`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * delete user subscription
     * @param id ID of the user to subscribe
     * @returns Subscription successful operation
     * @throws ApiError
     */
    public deleteUserSubscription(
        id: string,
    ): CancelablePromise<Subscription> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/{id}/subscription',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid user supplied`,
                500: `Internal server error`,
            },
        });
    }

}