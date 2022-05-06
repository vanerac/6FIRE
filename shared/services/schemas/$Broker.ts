/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Broker = {
    description: `Broker`,
    properties: {
        id: {
    type: 'number',
},
        name: {
    type: 'string',
},
        url: {
    type: 'string',
},
        imageUrl: {
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
        displayed: {
    type: 'boolean',
},
    },
} as const;