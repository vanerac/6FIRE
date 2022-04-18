import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { checkPassword, generateToken, hashPassword } from '../../tools/auth.tools';
import { AWSsendEmail, sendSMS } from '../../tools/notifications.tools';

const client = new PrismaClient();

const createVerificationCode = async (
    user: { id: number; email: string; telephone: string },
    type: 'EMAIL' | 'PHONE',
) => {
    const code = Math.floor(Math.random() * 1000000);
    const verificationCode = await client.verificationCodes.create({
        data: {
            userId: user.id,
            code,
            type,
        },
    });

    const messageTemplate = `Votre code de vérification est ${code}`;

    if (type === 'EMAIL') {
        await AWSsendEmail({ email: user.email, subject: 'Code de vérification', message: messageTemplate });
    } else {
        await sendSMS({
            phoneNumber: user.telephone,
            message: messageTemplate,
        });
    }

    return verificationCode;
};

export default class AuthController {
    static async register(req: Request, res: Response, next: NextFunction) {
        let user = undefined;
        try {
            const { email, password, firstName, lastName, countryId, telephone, confirm_password, CGU } = req.body;

            console.log(req.body);
            if (
                [CGU, email, password, confirm_password, firstName, lastName, countryId, telephone].includes(undefined)
            ) {
                console.log('missing fields');
                return res.status(400).json({
                    message: 'Missing required fields',
                });
            }

            user = await client.user.create({
                data: {
                    firstName,
                    lastName,
                    telephone,
                    country: {
                        connect: {
                            id: +countryId,
                        },
                    },
                    email,
                    password: hashPassword(password),
                    CGU: !!CGU,
                },
            });

            return res.status(200);
        } catch (error) {
            console.log(error);
            if (error.code === 'P2002') {
                return res.status(400).json({
                    message: 'User already exists',
                });
            }
            next(error);
        } finally {
            if (user)
                Promise.all([createVerificationCode(user, 'PHONE'), createVerificationCode(user, 'EMAIL')]).catch(
                    () => undefined,
                );
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const user = await client.user.findFirst({
                where: {
                    email,
                },
                select: {
                    id: true,
                    email: true,
                    password: true,
                    verifiedEmail: true,
                    verifiedPhone: true,
                    telephone: true,
                },
            });

            if (!user) {
                return res.status(401).json({
                    message: 'Invalid credentials',
                });
            }

            if (!checkPassword(password, user.password)) {
                return res.status(401).json({
                    message: 'Invalid credentials',
                });
            }

            if (!user.verifiedEmail && !user.verifiedPhone) {
                await Promise.all([
                    await createVerificationCode(user, 'PHONE'),
                    await createVerificationCode(user, 'EMAIL'),
                ]);
                return res.status(401).json({
                    message: 'User not verified',
                });
            }

            delete user.password;
            delete user.telephone;

            const token = generateToken(user);

            return res.json({
                token,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    static async logout(req: Request, res: Response) {
        req.session = null;
        res.sendStatus(200);
    }

    static async verify(req: Request, res: Response) {
        try {
            const { code } = req.query;

            const verification = await client.verificationCodes.findFirst({
                where: {
                    code: +code,
                },
                select: {
                    id: true,
                    code: true,
                    User: true,
                    type: true,
                    createdAt: true,
                },
            });

            if (!verification) {
                return res.status(400).json({
                    message: 'Invalid code',
                });
            }

            const { User, type, createdAt } = verification;

            const now = new Date();
            const diff = now.getTime() - createdAt.getTime();
            const diffMinutes = Math.round(diff / 60000);

            if (diffMinutes > 15) {
                return res.status(400).json({
                    message: 'Code expired',
                });
            }

            if (type === 'PHONE') {
                await client.user.update({
                    data: {
                        verifiedPhone: true,
                    },
                    where: {
                        id: User.id,
                    },
                });
            } else if (type === 'EMAIL') {
                await client.user.update({
                    data: {
                        verifiedEmail: true,
                    },
                    where: {
                        id: User.id,
                    },
                });
            }

            await client.verificationCodes.delete({
                where: {
                    id: verification.id,
                },
            });

            res.sendStatus(200);
        } catch (e) {
            res.status(500).json({
                message: e.message,
            });
        }
    }

    static async verifyNew(req: Request, res: Response) {
        try {
            const { type } = req.query;

            const { user } = req.session;

            await createVerificationCode(
                { id: user.id, email: user.email, telephone: user.telephone },
                type as 'PHONE' | 'EMAIL',
            );

            res.sendStatus(200);
        } catch (e) {
            res.status(500).json({
                message: e.message,
            });
        }
    }
}
