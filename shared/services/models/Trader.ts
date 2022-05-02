/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Trader = {
    id?: number;
    name?: string;
    clientId?: string;
    displayed?: boolean | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    curationWithFollows?: Array<{
        id?: number;
        name?: string;
        isFollowing?: boolean;
    }>;
};
