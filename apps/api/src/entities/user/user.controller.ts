import { NextFunction, Request, Response } from 'express';
import { ApiError, CRUDController } from '../../types';

import { PrismaClient } from '@prisma/client';
import createMollieClient from '@mollie/api-client';
import configuration from '../../../configuration';

const prisma = new PrismaClient();

export class UserController implements CRUDController {
    public static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await prisma.user.findMany({
                select: {
                    password: false,
                    id: true,
                    email: true,
                    firstName: true,
                    lastName: true,
                    telephone: true,
                    createdAt: true,
                    updatedAt: true,
                    UserSubscription: {
                        select: {
                            Subscription: {
                                select: {
                                    name: true,
                                },
                            },
                            status: true,
                        },
                    },
                },
                orderBy: {
                    id: 'asc',
                },
            });
            res.json(users);
        } catch (error) {
            next(error);
        }
    }

    public static async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user = await prisma.user.findFirst({
                where: {
                    id: +id,
                },
                select: {
                    password: false,
                },
            });
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    public static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { body } = req;
            const user = await prisma.user.create({
                data: {
                    ...body,
                },
            });
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    public static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { body } = req;
            console.log(body);
            const user = await prisma.user.update({
                where: {
                    id: +id,
                },
                data: {
                    ...body,
                },
            });
            res.json(user);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    public static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user = await prisma.user.delete({
                where: {
                    id: +id,
                },
            });
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    public static async getSubscription(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.user;
            const user = await prisma.userSubscription.findMany({
                where: {
                    userId: +id,
                },
                select: {
                    subscriptionId: true,
                    Subscription: {
                        select: {
                            name: true,
                            description: true,
                            price: true,
                            level: true,
                        },
                    },
                },
            });
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    public static async setSubscription(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { body } = req;

            const user = await prisma.user.findFirst({
                where: {
                    id: +id,
                },
            });

            if (!user) {
                return next(
                    new ApiError({
                        status: 404,
                        i18n: 'error.user.not_found',
                        message: 'User not found',
                    }),
                );
            }

            const customerId = await createMollieClient({ apiKey: configuration.MOLLIE_API_KEY }).customers.create({
                name: user.firstName,
                email: body.email,
            });

            const userSub = prisma.userSubscription.create({
                data: {
                    User: {
                        connect: {
                            id: +id,
                        },
                    },
                    Subscription: {
                        connect: {
                            id: +body.subscriptionId,
                        },
                    },
                    customerId: customerId.id,
                    paymentId: '',
                    status: 'active',
                    price: 0,
                    paymentProdvider: 'admin',
                },
            });
            res.json(userSub);
        } catch (error) {
            next(error);
        }
    }

    public static async removeSubscription(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user = prisma.userSubscription.deleteMany({
                where: {
                    userId: +id,
                },
            });
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    public static async getLinkingCode(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.user;
            const user = await prisma.user.findFirst({
                where: {
                    id: +id,
                },
                select: {
                    telegramLinkingCode: true,
                },
            });
            res.json({
                code: user.telegramLinkingCode,
            });
        } catch (error) {
            next(error);
        }
    }

    public static async me(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.user;
            const user = await prisma.user.findFirst({
                where: {
                    id: +id,
                },
                select: {
                    id: true,
                    email: true,
                    firstName: true,
                    lastName: true,
                    telephone: true,
                    UserSubscription: {
                        select: {
                            Subscription: {
                                select: {
                                    name: true,
                                    description: true,
                                    price: true,
                                    level: true,
                                },
                            },
                        },
                    },
                },
            });
            res.json(user);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async getInfos(req: Request, res: Response, next: NextFunction) {
        console.log('getInfos');
        try {
            const { id } = req.user;
            const user = await prisma.user.findFirst({
                where: {
                    id: +id,
                },
                select: {
                    id: true,
                    email: true,
                    firstName: true,
                    lastName: true,
                    telephone: true,
                },
            });
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    static async getSubscriptions(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.user;
            const user = await prisma.user.findFirst({
                where: {
                    id: +id,
                },
                select: {
                    UserSubscription: {
                        select: {
                            Subscription: {
                                select: {
                                    name: true,
                                    description: true,
                                    price: true,
                                    level: true,
                                },
                            },
                        },
                    },
                },
            });
            res.json(user?.UserSubscription ?? []);
        } catch (error) {
            next(error);
        }
    }

    static async updateInfos(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.user;
            const { firstName, lastName, telephone, email } = req.body;
            const user = await prisma.user.update({
                where: {
                    id: +id,
                },
                data: {
                    firstName,
                    email,
                    lastName,
                    telephone,
                },
            });
            res.json({
                firstName: user.firstName,
                email: user.email,
                lastName: user.lastName,
                telephone: user.telephone,
            });
        } catch (error) {
            next(error);
        }
    }
}
