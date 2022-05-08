/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Country = {
    properties: {
        id: {
    type: 'number',
    isRequired: true,
},
        name: {
    type: 'string',
    isRequired: true,
},
        code: {
    type: 'string',
    isRequired: true,
},
        createdAt: {
    type: 'string',
    isRequired: true,
    format: 'date-time',
},
        updatedAt: {
    type: 'string',
    isRequired: true,
    format: 'date-time',
},
    },
} as const;