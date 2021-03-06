/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Article } from '../models/Article';
import type { ArticlePro } from '../models/ArticlePro';
import type { Error } from '../models/Error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ArticleService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create article
     * @param requestBody Article object
     * @returns any Article response
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public createArticle(
        requestBody: (Article | ArticlePro),
    ): CancelablePromise<(Article | ArticlePro) | Error> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/article/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all articles
     * @param page Pagination page
     * @param limit Pagination size
     * @returns any Articles response
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public getArticles(
        page?: number,
        limit?: number,
    ): CancelablePromise<Array<(Article | ArticlePro)> | Error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/article/',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Get article by id
     * @param id The ID of the article
     * @returns any Article response
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public getArticleById(
        id: number,
    ): CancelablePromise<(Article | ArticlePro) | Error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/article/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update article by id
     * @param id The ID of the article
     * @param requestBody Article object
     * @returns any Article response
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public updateArticleById(
        id: number,
        requestBody: (Article | ArticlePro),
    ): CancelablePromise<(Article | ArticlePro) | Error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/article/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete article by id
     * @param id The ID of the article
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public deleteArticleById(
        id: number,
    ): CancelablePromise<Error> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/article/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get all articles by theme
     * @param id Theme id
     * @param page Pagination page
     * @param limit Pagination size
     * @returns any Articles response
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public getArticlesByTheme(
        id: number,
        page?: number,
        limit?: number,
    ): CancelablePromise<Array<(Article | ArticlePro)> | Error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/article/theme/{id}',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

}