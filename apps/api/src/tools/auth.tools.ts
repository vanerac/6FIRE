import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import configuration from '../../configuration';
import { User } from '@shared/services';

import { PrismaClient } from '@prisma/client';
import { ApiError } from '../types';

const prisma = new PrismaClient();

//model User {
//   id                Int                 @id @default(autoincrement())
//   userId            String              @unique @default(uuid())
//   firstName         String
//   lastName          String
//   email             String
//   password          String
//   telephone         String
//   countryId         Int
//   createdAt         DateTime            @default(now())
//   updatedAt         DateTime            @default(now())
//   isAdmin           Boolean             @default(false)
//   verifiedEmail     Boolean             @default(false)
//   verifiedPhone     Boolean             @default(false)
//   banned            Boolean             @default(false)
//   country           Country             @relation(fields: [countryId], references: [id])
//   VerificationCodes VerificationCodes[]
//   TraderFollows     TraderFollows[]
//   UserSubscription  UserSubscription[]
// }

export const generateToken = (user: any): string => {
    return jwt.sign(user, configuration.JWT_SECRET || 'secret', {
        expiresIn: '72h',
    });
};

export function hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

export function checkPassword(password: string, hash: string) {
    return bcrypt.compareSync(password, hash);
}

const getAccessToken = (req: Request): string | undefined => {
    const bearerHeader = req.headers['Authorization'] || req.headers['authorization'] || req.cookies['API_TOKEN'];
    if (!bearerHeader) return undefined;

    if (bearerHeader.startsWith('Bearer ')) {
        const [$bearer, token] = bearerHeader.split(' ');
        return token;
    } else {
        return bearerHeader;
    }
};

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const access_token = getAccessToken(req);

    if (!access_token) {
        return next(
            new ApiError({
                status: 401,
                message: 'Unauthorized',
                i18n: 'error.auth.missing',
            }),
        );
    }

    console.log(jwt.verify(access_token, configuration.JWT_SECRET || 'secret'));
    try {
        const decoded: User & any = jwt.verify(access_token, configuration.JWT_SECRET || 'secret');
        if (typeof decoded != 'string' && decoded.id) {
            req.user = decoded;
            next();
        } else {
            return next(
                new ApiError({
                    status: 401,
                    message: 'Unauthorized',
                    i18n: 'error.auth.invalid',
                }),
            );
        }
    } catch (error: any) {
        console.log(error);
        if (error.name === 'TokenExpiredError') {
            return next(
                new ApiError({
                    status: 401,
                    message: 'Access denied. Token expired.',
                    i18n: 'error.auth.expired',
                }),
            );
        } else {
            console.log(error);
            return next(
                new ApiError({
                    status: 401,
                    message: 'Access denied. Invalid token.',
                    i18n: 'error.auth.invalid',
                }),
            );
        }
    }
};

export async function isAdmin(req: Request, res: Response, next: NextFunction) {
    try {
        const { user } = req;

        if (!user) {
            return next(
                new ApiError({
                    status: 401,
                    message: 'Access denied. No token provided.',
                    i18n: 'error.auth.missing',
                }),
            );
        }

        const dbUser = await prisma.user.findFirst({
            where: {
                id: user.id,
            },
        });

        if (dbUser?.isAdmin) {
            next();
        } else {
            return next(
                new ApiError({
                    status: 403,
                    message: 'Access denied. Not admin.',
                    i18n: 'error.auth.forbidden',
                }),
            );
        }
    } catch (error: any) {
        console.log(error);
        return next(
            new ApiError({
                status: 401,
                message: 'Access denied. Invalid token.',
                i18n: 'error.auth.invalid',
            }),
        );
    }
}

export async function parseToken(req: Request, res: Response, next: NextFunction) {
    // Parse token, decode it and set req.user
    try {
        const bearerHeader = req.headers['Authorization'] || req.headers['authorization'] || req.cookies['API_TOKEN'];
        if (!bearerHeader) {
            return next();
        }
        let access_token: string;

        if (bearerHeader.startsWith('Bearer ')) {
            const [$bearer, token] = bearerHeader.split(' ');
            access_token = token;
        } else {
            access_token = bearerHeader;
        }
        const decoded: User & any = jwt.verify(access_token, configuration.JWT_SECRET || 'secret');
        if (typeof decoded != 'string' && decoded.id) {
            req.user = decoded;
        }
        next();
    } catch (e) {
        console.error(e);
    }
}
