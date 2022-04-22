/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

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
            firstName: string;
            lastName: string;
            telephone: string;
            countryId?: number;
            CGU: boolean;
        },
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Verify
     * Verify code in query params
     * @param code Verification code
     * @returns any OK
     * @throws ApiError
     */
    public verify(
        code: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/verify',
            query: {
                'code': code,
            },
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * VerifyNew
     * Generate a new verification code of type in query params
     * @param type Type of verification code
     * @returns any OK
     * @throws ApiError
     */
    public verifyNew(
        type: 'EMAIL' | 'PHONE',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/verifyNewUser',
            query: {
                'type': type,
            },
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * ForgotPassword
     * Forgot password
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public forgotPassword(
        requestBody?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/password/forgot',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Reset password with a code and new password
     * @param requestBody Reset password with a code and new password
     * @returns any OK
     * @throws ApiError
     */
    public resetPassword(
        requestBody: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/password/reset',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Change password
     * @param requestBody Change password
     * @returns any OK
     * @throws ApiError
     */
    public changePassword(
        requestBody: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/password/change',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }

}