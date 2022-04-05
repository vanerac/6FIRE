/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param id ID of user to fetch
     * @returns any successful operation
     * @throws ApiError
     */
    public getUsers(
        id?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/:id',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `User not found`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns any successful operation
     * @throws ApiError
     */
    public createUser(
        requestBody: User,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/:id',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid user supplied`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * @param id ID of user to update
     * @param requestBody
     * @returns any successful operation
     * @throws ApiError
     */
    public updateUser(
        id: any,
        requestBody: User,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/:id',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid user supplied`,
                404: `User not found`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * @param id ID of user to delete
     * @returns void
     * @throws ApiError
     */
    public deleteUser(
        id: any,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/:id',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `User not found`,
                500: `Internal server error`,
            },
        });
    }

}