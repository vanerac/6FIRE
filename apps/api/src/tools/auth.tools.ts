import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import configuration from '../../configuration';
import { User } from '@shared/services';

import { PrismaClient } from '@prisma/client';

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
        expiresIn: '1h',
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
        return res.status(401).send({
            status: 'error',
            message: 'Access denied. No token provided.',
        });
    }

    try {
        const decoded: User & any = jwt.verify(access_token, configuration.JWT_SECRET || 'secret');
        if (typeof decoded != 'string' && decoded.id) {
            req.user = decoded;
            next();
        } else {
            return res.status(401).send({
                status: 'error',
                message: 'Access denied. Invalid token.',
            });
        }
    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).send({
                status: 'error',
                message: 'Access denied. Token expired.',
            });
        } else {
            console.log(error);
            return res.status(401).send({
                status: 'error',
                message: 'Access denied. Invalid token.',
            });
        }
    }
};

export async function isAdmin(req: Request, res: Response, next: NextFunction) {
    try {
        const { user } = req;

        if (!user) {
            return res.status(401).send({
                status: 'error',
                message: 'Access denied. No token provided.',
            });
        }

        prisma.user
            .findFirst({
                where: {
                    id: user.id,
                },
            })
            .then((user: User & any) => {
                if (user.isAdmin) {
                    next();
                } else {
                    return res.status(401).send({
                        status: 'error',
                        message: 'Access denied. Invalid token.',
                    });
                }
            });
    } catch (error: any) {
        console.log(error);
        return res.status(401).send({
            status: 'error',
            message: 'Access denied. Invalid token.',
        });
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
