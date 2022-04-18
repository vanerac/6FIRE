/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type {CancelablePromise} from '../core/CancelablePromise';
import type {BaseHttpRequest} from '../core/BaseHttpRequest';

export class AuthService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Login
     * Login
     * @param requestBody
     * @returns any Successful operation
     * @throws ApiError
     */
    public login(
        requestBody: {
            email: string;
            password: string;
        },
    ): CancelablePromise<{
        token?: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Logout
     * Logout
     * @returns any OK
     * @throws ApiError
     */
    public logout(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/logout',
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Register
     * Register
     * @param requestBody
     * @returns any User created
     * @throws ApiError
     */
    public register(
        requestBody: {
            email: string;
            password: string;
            confirm_password?: string;
            firstName: string;
            lastName: string;
            telephone: string;
            countryId: number;
            cgu?: boolean;
        },
    ): CancelablePromise<{
        token?: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }

}
