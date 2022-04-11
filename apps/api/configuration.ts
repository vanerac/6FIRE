export default {
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    OPENAPI_SPEC_DEFINITION: process.env.OPENAPI_SPEC ?? '../../../shared/generated/openapi-v1.json',
};
