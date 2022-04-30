/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Regenerate the admin password and send it by email, can be done every 12 hours
     * @returns any Successful response
     * @throws ApiError
     */
    public resetPassword(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/reset',
            errors: {
                400: `Bad request`,
            },
        });
    }

    /**
     * Update the sms config
     * @param requestBody
     * @throws ApiError
     */
    public updateSmsConfig(
        requestBody: {
            value: string;
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/config/sms',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}