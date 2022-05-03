import express, { NextFunction, Request, Response } from 'express';
import Routes from './entities/routes';
import * as OpenApiValidator from 'express-openapi-validator';
import { User } from '@shared/services';
import configuration from '../configuration';
import { PrismaClient } from '@prisma/client';
import { QueryResultRow } from 'pg';
import cookieParser from 'cookie-parser';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import { ApiError } from './types';
import multer from 'multer';

import { v4 as uuid } from 'uuid';
import cors from 'cors';
import * as fs from 'fs';

declare module 'express' {
    interface Request {
        user?: User;
    }
}

const app = express();

Sentry.init({
    dsn: configuration.SENTRY_DSN,
    integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        new Tracing.Integrations.Express({ app }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    release: process.env.RELEASE_VERSION,
    tracesSampleRate: 1.0,
    environment: configuration.NODE_ENV,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());
// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// eslint-disable-next-line @typescript-eslint/no-var-requires
const openApiDocument = require(configuration.OPENAPI_SPEC_DEFINITION);
const prisma = new PrismaClient();

// Parser * Loggers
app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));

app.use(express.urlencoded({ extended: true, limit: '250mb', parameterLimit: 1000000 }));
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.path} ${req.secure ? 'https' : 'http'}`);
    next();
});

// CORS;
app.use(
    cors({
        origin: '*',
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'sentry-trace'],
        methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
    }),
);

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });
// Format error response
app.use((err, req, res, $next) => {
    // format error
    console.log(err);
    if (!(err instanceof ApiError)) {
        Sentry.captureException(err);
    }
    res.status(err.status || 500).json({
        i18n: err.i18n ?? 'error.unknown',
        message: err.message,
        errors: err.errors,
    });
});
// Validate OpenAPI
app.use(
    OpenApiValidator.middleware({
        apiSpec: openApiDocument,
        // validateRequests: {
        //     removeAdditional: 'all',
        //     allowUnknownQueryParameters: false,
        //     coerceTypes: false,
        // },
        ignoreUndocumented: true,
        // validateResponses: {
        //     removeAdditional: 'failing',
        //     onError: console.error, // todo: temporary solution
        // },
        validateFormats: 'full',
        ignorePaths: /.*upload/,
        // ignoreUndocumented: true,
        operationHandlers: false,
        fileUploader: {
            dest: configuration.UPLOAD_DIR,
            storage: multer.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, configuration.UPLOAD_DIR);
                },
                filename: (req, file, cb) => {
                    console.log(file.originalname);
                    cb(null, `${uuid()}-${file.originalname}`);
                },
            }),
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

app.use('/api', Routes);

app.get('/', (req, res) => {
    prisma.$queryRaw`SELECT version()`.then((result: QueryResultRow) => {
        res.status(200).json({
            message: 'Server Up !',
            postgres: result[0].version,
        });
    });
});

fs.mkdirSync(configuration.UPLOAD_DIR, { recursive: true });

app.use('/public', express.static(configuration.UPLOAD_DIR));

app.use((err, req, res, $next) => {
    if (!(err instanceof ApiError)) {
        Sentry.captureException(err);
    }

    res.status(err.status || 500).json({
        i18n: err.i18n ?? 'error.unknown',
        message: err.message,
        errors: err.errors,
    });
});

app.listen(3333, () => {
    console.log('🚀 Server started on port 3333!');
});

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
});
