import cors from 'cors';
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
    tracesSampleRate: 1.0,
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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.path} ${req.secure ? 'https' : 'http'}`);
    next();
});

// CORS
app.use(
    cors({
        origin: '*',
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
        methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
    }),
);

// Format error response
app.use((err, req, res, $next) => {
    // format error
    console.log('error', err);
    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
    });
});
// Validate OpenAPI
app.use(
    OpenApiValidator.middleware({
        apiSpec: openApiDocument,
        validateRequests: {
            removeAdditional: 'all',
            allowUnknownQueryParameters: false,
            coerceTypes: false,
        },
        ignoreUndocumented: true,
        // validateResponses: {
        //     removeAdditional: 'failing',
        //     onError: console.error, // todo: temporary solution
        // },
        validateFormats: 'full',
        // ignoreUndocumented: true,
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

app.use('/api', Routes);

app.get('/', (req, res) => {
    prisma.$queryRaw`SELECT version()`.then((result: QueryResultRow) => {
        res.status(200).json({
            message: 'Server Up !',
            postgres: result[0].version,
        });
    });
});

app.use('/public', express.static(configuration.UPLOAD_DIR));

app.use((err, req, res, $next) => {
    // format error
    console.log('error', err);
    Sentry.captureException(err);
    console.log('sent', err);
    res.status(err.status || 500).json({
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
