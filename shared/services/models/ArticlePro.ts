/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ArticlePro = {
    id?: number;
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
    themeId?: number;
    recommendedArticleIds?: Array<number>;
    podcastUrl?: string;
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
    banner?: Blob;
    header?: Blob;
    bannerUrl?: string;
    headerUrl?: string;
};
