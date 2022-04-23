import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { checkPassword, generateToken, hashPassword } from '../../tools/auth.tools';
import { AWSsendEmail, sendSMS } from '../../tools/notifications.tools';

const client = new PrismaClient();

const passwordResetCode = async (userId) => {
    // create a new code
    // store it in the database

    // email the user with the code
    // send a sms to the user with the code

    const code = Math.floor(Math.random() * 1000000);
    const user = await client.user.findFirst({
        where: {
            userId,
        },
    });
    if (!user) {
        return false;
    }
    const passwordReset = await client.passwordReset.create({
        data: {
            user: {
                connect: {
                    userId,
                },
            },
            token: code.toString(),
        },
    });
    if (!passwordReset) {
        return false;
    }
    const { email } = user;
    const sms = user.telephone;
    const emailMessage = `Your password reset code is ${code}`;
    const smsMessage = `Your password reset code is ${code}`;

    return Promise.all([
        AWSsendEmail({ email, subject: 'Password reset code', message: emailMessage }),
        sendSMS({
            phoneNumber: sms,
            message: smsMessage,
        }),
    ]);
};

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
            const { email, password, firstName, lastName, telephone, CGU } = req.body;

            console.log(req.body);
            if ([CGU, email, password, firstName, lastName, telephone].includes(undefined)) {
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
                    // country: {
                    //     connect: {
                    //         id: +countryId,
                    //     },
                    // },
                    email,
                    password: hashPassword(password),
                    CGU: !!CGU,
                },
            });

            const token = generateToken(user);

            return res.json({
                token,
            });
        } catch (error) {
            if (error.code === 'P2002') {
                return res.status(400).json({
                    message: 'User already exists',
                });
            }
            return next(error);
        } finally {
            if (user)
                Promise.all([createVerificationCode(user, 'PHONE'), createVerificationCode(user, 'EMAIL')]).catch(
                    () => undefined,
                );
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
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

            // if (!user.verifiedEmail && !user.verifiedPhone) {
            //     await Promise.all([
            //         await createVerificationCode(user, 'PHONE'),
            //         await createVerificationCode(user, 'EMAIL'),
            //     ]);
            //     return res.status(401).json({
            //         message: 'User not verified',
            //     });
            // }

            delete user.password;
            delete user.telephone;

            const token = generateToken(user);

            return res.json({
                token,
            });
        } catch (error) {
            next(error);
        }
    }

    static async logout(req: Request, res: Response) {
        req.session = null;
        res.sendStatus(200);
    }

    static async verify(req: Request, res: Response, next: NextFunction) {
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
        } catch (error) {
            next(error);
        }
    }

    static async verifyNew(req: Request, res: Response, next: NextFunction) {
        try {
            const { type } = req.query;

            const { user } = req;

            await createVerificationCode(
                { id: user.id, email: user.email, telephone: user.telephone },
                type as 'PHONE' | 'EMAIL',
            );

            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    }

    static async resetPassword(req: Request, res: Response, next: NextFunction) {
        try {
            const { code, newPassword, confirmPassword } = req.body;

            const verification = await client.passwordReset.findFirst({
                where: {
                    token: code,
                },
                select: {
                    id: true,
                    token: true,
                    createdAt: true,
                    userId: true,
                },
            });

            if (!verification) {
                return res.status(400).json({
                    message: 'Invalid code',
                });
            }

            const { createdAt } = verification;
            const now = new Date();
            const diff = now.getTime() - createdAt.getTime();
            const diffMinutes = Math.round(diff / 60000);

            if (diffMinutes > 15) {
                return res.status(400).json({
                    message: 'Code expired',
                });
            }

            if (newPassword !== confirmPassword) {
                return res.status(400).json({
                    message: 'Passwords do not match',
                });
            }

            const user = await client.user.findFirst({
                where: {
                    id: +verification.userId,
                },
            });

            if (!user) {
                return res.status(400).json({
                    message: 'User not found',
                });
            }

            await client.user.update({
                data: {
                    password: newPassword,
                },
                where: {
                    id: user.id,
                },
            });

            await client.passwordReset.delete({
                where: {
                    id: verification.id,
                },
            });

            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    }

    static async forgotPassword(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.body;
            const user = await client.user.findFirst({
                where: {
                    email,
                },
                select: {
                    id: true,
                    email: true,
                    verifiedEmail: true,
                },
            });
            if (!user) {
                return res.status(400).json({
                    message: 'User not found',
                });
            }
            if (!user.verifiedEmail) {
                return res.status(400).json({
                    message: 'User not verified',
                });
            }
            await passwordResetCode(user.id);
            res.sendStatus(200);
        } catch (e) {
            next(e);
        }
    }

    static async changePassword(req: Request, res: Response, next: NextFunction) {
        try {
            const { user } = req;
            const { oldPassword, newPassword, confirmPassword } = req.body;

            const userPassword = await client.user.findFirst({
                where: {
                    id: user.id,
                },
                select: {
                    password: true,
                },
            });

            if (!userPassword) {
                return res.status(400).json({
                    message: 'User not found',
                });
            }

            if (confirmPassword !== newPassword) {
                return res.status(400).json({
                    message: 'Passwords do not match',
                });
            }

            const isValid = checkPassword(oldPassword, userPassword.password);

            if (!isValid) {
                return res.status(400).json({
                    message: 'Invalid password',
                });
            }

            const hashedPassword = await hashPassword(newPassword);

            await client.user.update({
                data: {
                    password: hashedPassword,
                },
                where: {
                    id: user.id,
                },
            });

            res.sendStatus(200);
        } catch (e) {
            next(e);
        }
    }
}
