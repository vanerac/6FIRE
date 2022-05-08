/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Theme } from '../models/Theme';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ThemesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create theme
     * Create theme
     * @param requestBody 
     * @returns Theme successful operation
     * @throws ApiError
     */
    public createTheme(
requestBody: Theme,
): CancelablePromise<Theme> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/theme',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid ID supplied`,
                404: `Theme not found`,
                405: `Validation exception`,
                409: `Theme already exists`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * Get all themes
     * Get all themes
     * @returns Theme successful operation
     * @throws ApiError
     */
    public getThemes(): CancelablePromise<Array<Theme>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/theme',
            errors: {
                400: `Invalid ID supplied`,
                404: `Theme not found`,
            },
        });
    }

    /**
     * Get theme
     * Get theme
     * @param id ID of user to fetch
     * @returns Theme successful operation
     * @throws ApiError
     */
    public getTheme(
id: number,
): CancelablePromise<Theme> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/theme/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `Theme not found`,
            },
        });
    }

    /**
     * Update theme
     * Update theme
     * @param id ID of user to fetch
     * @param requestBody 
     * @returns Theme successful operation
     * @throws ApiError
     */
    public updateTheme(
id: number,
requestBody: Theme,
): CancelablePromise<Theme> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/theme/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid ID supplied`,
                404: `Theme not found`,
            },
        });
    }

    /**
     * Delete theme
     * Delete theme
     * @param id ID of user to fetch
     * @returns any successful operation
     * @throws ApiError
     */
    public deleteTheme(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/theme/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `Theme not found`,
            },
        });
    }

}