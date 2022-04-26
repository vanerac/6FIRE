import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { checkPassword, generateToken, hashPassword } from '../../tools/auth.tools';
import { AWSsendEmail, sendSMS } from '../../tools/notifications.tools';
import { generateResetPasswordEmail, generateVerifyEmail } from '../../templates/email';
import configuration from '../../../configuration';
import { ApiError } from '../../types';

const client = new PrismaClient();

const passwordResetCode = async (userId) => {
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
    const smsMessage = `Your password reset code is ${code}`;

    const emailBody = generateResetPasswordEmail({
        reset_link: configuration.SERVER_ADDRESS + '/api/auth/password/reset?code=' + code,
    });
    return Promise.all([
        AWSsendEmail({
            email,
            subject: 'Password reset code',
            htmlMessage: emailBody,
        }),
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

    const messageTemplate = generateVerifyEmail({
        confirmation_link: `${configuration.SERVER_ADDRESS}/api/auth/verify?code=${code}`,
    });

    if (type === 'EMAIL') {
        await AWSsendEmail({ email: user.email, subject: 'Code de vérification', htmlMessage: messageTemplate });
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
                return next(
                    new ApiError({
                        status: 400,
                        message: 'Missing required fields',
                        i18n: 'error.format.missing_fields',
                    }),
                );
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

            return res.cookie(
                'API_TOKEN',
                     token,
                   { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)},
            ).json({
                token,
            });
        } catch (error) {
            if (error.code === 'P2002') {
                // return res.status(400).json({
                //     message: 'User already exists',
                // });
                return next(
                    new ApiError({
                        status: 400,
                        message: 'User already exists',
                        i18n: 'error.user.duplicate',
                    }),
                );
            }
            return next(error);
        } finally {
            if (user)
                Promise.all([/*createVerificationCode(user, 'PHONE'),*/ createVerificationCode(user, 'EMAIL')]).catch(
                    console.error,
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
                return next(
                    new ApiError({
                        status: 401,
                        message: 'Invalid credentials',
                        i18n: 'error.auth.credentials.invalid',
                    }),
                );
            }

            if (!checkPassword(password, user.password)) {
                return next(
                    new ApiError({
                        status: 401,
                        message: 'Invalid credentials',
                        i18n: 'error.auth.credentials.invalid',
                    }),
                );
            }

            delete user.password;
            delete user.telephone;

            const token = generateToken(user);

            return res.cookie(
                'API_TOKEN',
                     token,
                   { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)},
            ).json({
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
                return next(
                    new ApiError({
                        status: 400,
                        message: 'Invalid code',
                        i18n: 'error.auth.verification.invalid',
                    }),
                );
            }

            const { User, type, createdAt } = verification;

            const now = new Date();
            const diff = now.getTime() - createdAt.getTime();
            const diffMinutes = Math.round(diff / 60000);

            if (diffMinutes > 15) {
                return next(
                    new ApiError({
                        status: 400,
                        message: 'Code expired',
                        i18n: 'error.auth.verification.expired',
                    }),
                );
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
                return next(
                    new ApiError({
                        status: 400,
                        message: 'Invalid code',
                        i18n: 'error.auth.password.reset.code.invalid',
                    }),
                );
            }

            const { createdAt } = verification;
            const now = new Date();
            const diff = now.getTime() - createdAt.getTime();
            const diffMinutes = Math.round(diff / 60000);

            if (diffMinutes > 15) {
                return next(
                    new ApiError({
                        status: 400,
                        message: 'Code expired',
                        i18n: 'error.auth.password.reset.code.expired',
                    }),
                );
            }

            if (newPassword !== confirmPassword) {
                return next(
                    new ApiError({
                        status: 400,
                        message: 'Passwords do not match',
                        i18n: 'error.auth.password.reset.unmatched',
                    }),
                );
            }

            const user = await client.user.findFirst({
                where: {
                    id: +verification.userId,
                },
            });

            if (!user) {
                return next(
                    new ApiError({
                        status: 400,
                        message: 'User not found',
                        i18n: 'error.user.not_found',
                    }),
                );
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
                return next(
                    new ApiError({
                        status: 400,
                        message: 'User not found',
                        i18n: 'error.user.not_found',
                    }),
                );
            }
            if (!user.verifiedEmail) {
                return next(
                    new ApiError({
                        status: 400,
                        message: 'User not verified',
                        i18n: 'error.user.email.not_verified',
                    }),
                );
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
                // return res.status(400).json({
                //     message: 'User not found',
                // });
                return next(
                    new ApiError({
                        status: 400,
                        message: 'User not found',
                        i18n: 'error.user.not_found',
                    }),
                );
            }

            if (confirmPassword !== newPassword) {
                // return res.status(400).json({
                //     message: 'Passwords do not match',
                // });
                return next(
                    new ApiError({
                        status: 400,
                        message: 'Passwords do not match',
                        i18n: 'error.user.password.not_match',
                    }),
                );
            }

            const isValid = checkPassword(oldPassword, userPassword.password);

            if (!isValid) {
                return next(
                    new ApiError({
                        status: 400,
                        message: 'Invalid password',
                        i18n: 'error.user.password.invalid',
                    }),
                );
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
