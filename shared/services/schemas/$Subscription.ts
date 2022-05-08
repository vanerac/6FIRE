/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Subscription = {
    properties: {
        id: {
    type: 'number',
},
        name: {
    type: 'string',
    isRequired: true,
},
        description: {
    type: 'string',
    isRequired: true,
},
        refreshRate: {
    type: 'number',
},
        subscriptionType: {
    type: 'string',
    isRequired: true,
},
        price: {
    type: 'number',
    isRequired: true,
},
        level: {
    type: 'number',
    isRequired: true,
},
        hidden: {
    type: 'boolean',
},
        isBestValue: {
    type: 'boolean',
},
        hasFreeTrial: {
    type: 'boolean',
},
        freeTrialDays: {
    type: 'number',
},
        createdAt: {
    type: 'string',
},
        updatedAt: {
    type: 'string',
},
    },
} as const;