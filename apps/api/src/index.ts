import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import Routes from './entities/routes';
import * as OpenApiValidator from 'express-openapi-validator';
import { User } from '@shared/services';
import configuration from '../configuration';
import { PrismaClient } from '@prisma/client';
import { QueryResultRow } from 'pg';
import cookieParser from 'cookie-parser';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const openApiDocument = require(configuration.OPENAPI_SPEC_DEFINITION);

const app = express();

app.use(cookieParser());

const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.path} ${req.secure ? 'https' : 'http'}`);
    next();
});
app.use((err, req, res, $next) => {
    // format error
    console.log('error', err);
    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
    });
});
app.use(
    OpenApiValidator.middleware({
        apiSpec: openApiDocument,
        validateRequests: {
            removeAdditional: 'all',
            allowUnknownQueryParameters: false,
            coerceTypes: false,
        },
        // validateResponses: {
        //     removeAdditional: 'failing',
        //     onError: console.error, // todo: temporary solution
        // },
        validateFormats: 'full',
        operationHandlers: false,
        fileUploader: {
            dest: configuration.UPLOAD_DIR,
            limits: {
                fileSize: 10 * 1024 * 1024,
            },
        },
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

declare module 'express' {
    interface Request {
        user?: User;
    }
}

app.use('/api', Routes);

app.use(
    cors({
        origin: '*',
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
        methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
    }),
);

app.use(express.static(configuration.UPLOAD_DIR));

app.get('/', (req, res) => {
    prisma.$queryRaw`SELECT version()`.then((result: QueryResultRow) => {
        res.status(200).json({
            message: 'Server Up !',
            postgres: result[0].version,
        });
    });
});

app.listen(3333, () => {
    console.log('🚀 Server started on port 3333!');
});
