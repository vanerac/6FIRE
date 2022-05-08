import { NextFunction, Request, Response } from 'express';
//model Config {
//   id        Int      @id @default(autoincrement())
//   name      String
//   value     String
//   createdAt DateTime @default(now())
//   updatedAt DateTime @default(now())
// }
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../../tools/auth.tools';
import { AWSsendEmail } from '../../tools/notifications.tools';

const strongPassworGenerator = () => {
    const length = 16;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let retVal = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};

const prisma = new PrismaClient();

export default class AdminController {
    static async smsToggle(req: Request, res: Response, next: NextFunction) {
        try {
            const key = 'smsTrigger';
            const { value } = req.body;

            prisma.config.upsert({
                where: {
                    key: key,
                },
                update: {
                    value: value,
                },
                create: {
                    key: key,
                    value: value,
                },
            });
            res.status(200).json({
                message: 'SMS Trigger updated',
            });
        } catch (e) {
            next(e);
        }
    }

    static async resetPassword(req: Request, res: Response, next: NextFunction) {
        try {
            const email = 'admin@6fireinvest.com';
            const password = strongPassworGenerator();

            console.log('password', password);
            const encryptedPassword = hashPassword(password);
            console.log('encryptedPassword', encryptedPassword);
            const admin = await prisma.user.findFirst({
                where: {
                    email: email,
                },
            });

            // Update password every 12h
            // const now = new Date();
            // const twelveHoursAgo = new Date(now.getTime() - 12 * 60 * 60 * 1000);

            if (!admin) {
                await prisma.user.create({
                    data: {
                        email: email,
                        isAdmin: true,
                        telephone: '+33123456789',
                        password: encryptedPassword,
                        CGU: true,
                        firstName: 'Admin',
                        lastName: 'Admin',
                    },
                });
            }
            // } else if (admin.updatedAt < twelveHoursAgo) {
            else
                await prisma.user.update({
                    where: {
                        email: email,
                    },
                    data: {
                        isAdmin: true,
                        password: encryptedPassword,
                    },
                });
            // } else {
            //     throw new ApiError({
            //         status: 400,
            //         message: 'Password already updated',
            //         i18n: 'error.admin.password.alreadyUpdated',
            //     });
            // }

            // send email

            await AWSsendEmail({
                email: email,
                message: `Votre nouveau mot de passe est ${password}`,
                subject: 'Votre nouveau mot de passe',
                htmlMessage: `<p>Votre nouveau mot de passe est ${password}</p>`,
            });

            res.status(200).json({
                message: 'Password updated',
            });
        } catch (e) {
            console.log(e);
            next(e);
        }
    }

    static async setUserPassword(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: userId, newPassword } = req.body;

            const pass = hashPassword(newPassword);

            await prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    password: pass,
                },
            });

            res.status(200).json({
                message: 'Password updated',
            });
        } catch (e) {
            next(e);
        }
    }

    static async isAdmin(req: Request, res: Response, next: NextFunction) {
        try {
            const { isAdmin } = req.user;

            if (isAdmin) {
                res.status(200).json({
                    message: 'Admin',
                });
            } else {
                res.status(403).json({
                    message: 'Not admin',
                });
            }
        } catch (e) {
            next(e);
        }
    }
}
