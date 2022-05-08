/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ArticlePro = {
    properties: {
        id: {
    type: 'number',
},
        title: {
    type: 'string',
},
        description: {
    type: 'string',
},
        salaireMoy: {
    type: 'string',
},
        tarificationMoy: {
    type: 'string',
},
        outils: {
    type: 'string',
},
        creation: {
    type: 'string',
},
        utilisateurs: {
    type: 'string',
},
        necessiteAudicance: {
    type: 'string',
},
        financement: {
    type: 'string',
},
        content: {
    type: 'string',
},
        hidden: {
    type: 'boolean',
},
        createdAt: {
    type: 'string',
},
        updatedAt: {
    type: 'string',
},
        themeId: {
    type: 'number',
},
        recommendedArticleIds: {
    type: 'array',
    contains: {
    type: 'number',
},
},
        podcastUrl: {
    type: 'string',
},
        ArticleRecommandation: {
    type: 'array',
    contains: {
    properties: {
        Recommandation: {
    properties: {
        Article: {
    properties: {
        id: {
    type: 'number',
},
        title: {
    type: 'string',
},
        content: {
    type: 'string',
},
        createdAt: {
    type: 'string',
},
        updatedAt: {
    type: 'string',
},
        themeId: {
    type: 'number',
},
        bannerUrl: {
    type: 'string',
},
        headerUrl: {
    type: 'string',
},
        Theme: {
    properties: {
        id: {
    type: 'number',
},
        name: {
    type: 'string',
},
        iconUrl: {
    type: 'string',
},
    },
},
    },
},
    },
},
    },
},
},
        Theme: {
    properties: {
        id: {
    type: 'number',
},
        name: {
    type: 'string',
},
        iconUrl: {
    type: 'string',
},
    },
},
        banner: {
    type: 'binary',
    format: 'binary',
},
        header: {
    type: 'binary',
    format: 'binary',
},
        bannerUrl: {
    type: 'string',
},
        headerUrl: {
    type: 'string',
},
    },
} as const;