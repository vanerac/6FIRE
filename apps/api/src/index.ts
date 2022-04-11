import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import Routes from './entities/routes';
import * as OpenApiValidator from 'express-openapi-validator';
import { User } from '../../../shared/services/models/User';
import configuration from '../configuration';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use(
    OpenApiValidator.middleware({
        apiSpec: configuration.OPENAPI_SPEC_DEFINITION,
        validateRequests: {
            removeAdditional: 'failing',
            allowUnknownQueryParameters: false,
        },
        validateResponses: {
            removeAdditional: 'failing',
        },
        validateFormats: 'full',
        operationHandlers: false,
        // validateSecurity: {
        //     handlers: {
        //         BearerAuth: (req: Request, scopes: string[], schema: SecuritySchemeObject): boolean => {
        //             // parse header token for Bearer Token
        //             console.log(scopes, schema);
        //             const token = req.headers['Authorization'] as string | undefined;
        //             console.log(!!token?.match(/^Bearer\s+(.*)$/));
        //             throw new Error('test');
        //             return !!token?.match(/^Bearer\s+(.*)$/);
        //         },
        //     },
        // },
    }),
);

declare module 'express-session' {
    export interface SessionData {
        user: User;

        [key: string]: any;
    }
}

app.use(Routes);

app.use(
    cors({
        origin: '*',
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
        methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
    }),
);

app.use((err, req, res, next) => {
    // format error
    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
    });
});

app.listen(3333, () => {
    console.log('🚀 Server started on port 3333!');
});
