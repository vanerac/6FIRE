/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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

}