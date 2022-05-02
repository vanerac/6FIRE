/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Article = {
    id?: number;
    title: string;
    content: string;
    hidden: boolean;
    createdAt?: string;
    updatedAt?: string;
    themeId: number;
    recommendedArticleIds?: Array<number>;
    ArticleRecommandation?: Array<{
        Recommandation?: {
            Article?: {
                id?: number;
                title?: string;
                content?: string;
                createdAt?: string;
                updatedAt?: string;
                themeId?: number;
                bannerUrl?: string;
                headerUrl?: string;
                Theme?: {
                    id?: number;
                    name?: string;
                    iconUrl?: string;
                };
            };
        };
    }>;
    Theme?: {
        id?: number;
        name?: string;
        iconUrl?: string;
    };
    bannerUrl?: string;
    headerUrl?: string;
};
