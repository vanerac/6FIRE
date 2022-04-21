import { NextFunction, Request, Response } from 'express';
import { CRUDController } from '../../types';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserController implements CRUDController {
    public static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const users = prisma.user.findMany({
                select: {
                    password: false,
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
            const { id } = req.params;
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

    public static setSubscription(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { body } = req;
            const user = prisma.userSubscription.create({
                data: {
                    userId: +id,
                    subscriptionId: +body.subscriptionId,
                },
            });
            res.json(user);
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
}
