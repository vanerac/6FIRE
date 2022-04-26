/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Article = {
    id: string;
    title: string;
    content: string;
    hidden: boolean;
    createdAt: string;
    updatedAt: string;
    themeId: string;
    recommendedArticleIds?: Array<string>;
    ArticleRecommandation?: Array<{
        Recommandation?: {
            Article?: {
                id?: string;
                title?: string;
                content?: string;
                createdAt?: string;
                updatedAt?: string;
                themeId?: string;
            };
        };
    }>;
    banner?: Blob;
    header?: Blob;
    bannerUrl?: string;
    headerUrl?: string;
};
