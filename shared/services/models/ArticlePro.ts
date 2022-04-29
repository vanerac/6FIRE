/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ArticlePro = {
    id?: string;
    title?: string;
    description?: string;
    salaireMoy?: string;
    tarificationMoy?: string;
    outils?: string;
    creation?: string;
    utilisateurs?: string;
    necessiteAudicance?: string;
    financement?: string;
    content?: string;
    hidden?: boolean;
    createdAt?: string;
    updatedAt?: string;
    themeId?: string;
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
    Theme?: {
        id?: string;
        name?: string;
        iconUrl?: string;
    };
    banner?: Blob;
    header?: Blob;
    bannerUrl?: string;
    headerUrl?: string;
};
