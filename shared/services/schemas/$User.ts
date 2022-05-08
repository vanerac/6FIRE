/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $User = {
    properties: {
        id: {
    type: 'number',
},
        firstName: {
    type: 'string',
},
        lastName: {
    type: 'string',
},
        email: {
    type: 'string',
},
        password: {
    type: 'string',
},
        telephone: {
    type: 'string',
},
        countryId: {
    type: 'number',
},
        createdAt: {
    type: 'string',
},
        updatedAt: {
    type: 'string',
},
        isAdmin: {
    type: 'boolean',
},
        verifiedEmail: {
    type: 'boolean',
},
        verifiedPhone: {
    type: 'boolean',
},
        banned: {
    type: 'boolean',
},
        note: {
    type: 'string',
},
        UserSubscription: {
    type: 'array',
    contains: {
    properties: {
        Subscription: {
    properties: {
        name: {
    type: 'string',
},
    },
},
        status: {
    type: 'string',
},
    },
},
},
    },
} as const;