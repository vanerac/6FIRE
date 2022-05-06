/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Article = {
    properties: {
        id: {
    type: 'number',
},
        title: {
    type: 'string',
    isRequired: true,
},
        content: {
    type: 'string',
    isRequired: true,
},
        hidden: {
    type: 'boolean',
    isRequired: true,
},
        createdAt: {
    type: 'string',
},
        updatedAt: {
    type: 'string',
},
        themeId: {
    type: 'number',
    isRequired: true,
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
        bannerUrl: {
    type: 'string',
},
        headerUrl: {
    type: 'string',
},
    },
} as const;