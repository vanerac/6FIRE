/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Theme = {
    properties: {
        id: {
    type: 'number',
},
        name: {
    type: 'string',
},
        description: {
    type: 'string',
},
        createdAt: {
    type: 'string',
    format: 'date-time',
},
        updatedAt: {
    type: 'string',
    format: 'date-time',
},
        subscriptionLevel: {
    type: 'number',
},
        iconUrl: {
    type: 'string',
},
    },
} as const;