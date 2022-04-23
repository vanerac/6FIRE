import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CRUDController } from '../../types';

const prisma = new PrismaClient();
// const mollieClient = createMollieClient({ apiKey: configuration.MOLLIE_API_KEY });

export const PaymentType = {
    SUBSCRIPTION: 'SUBSCRIPTION',
    ONETIME: 'ONETIME',
};

export default class SubscriptionController extends CRUDController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const subscriptions = await prisma.subscription.findMany({
                include: {
                    UserSubscription: true,
                },
            });
            res.json(subscriptions);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const subscription = await prisma.subscription.findFirst({
                where: {
                    id: +id,
                },
                include: {
                    UserSubscription: true,
                },
            });
            res.json(subscription);
        } catch (error) {
            next(error);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, description, price, level, refreshRate } = req.body;
            const subscription = await prisma.subscription.create({
                data: {
                    name,
                    description,
                    price,
                    level,
                    refreshRate,
                    subscriptionType: (refreshRate ? PaymentType.SUBSCRIPTION : PaymentType.ONETIME) as any,
                },
            });

            res.json(subscription);
        } catch (error) {
            next(error);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { name, description, price, level } = req.body;
            const subscription = await prisma.subscription.update({
                where: {
                    id: +id,
                },
                data: {
                    name,
                    description,
                    price,
                    level,
                },
            });
            // Todo: update mollie subscription
            res.json(subscription);
        } catch (error) {
            next(error);
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const subscription = await prisma.subscription.delete({
                where: {
                    id: +id,
                },
            });
            // Todo: delete mollie subscription
            res.json(subscription);
        } catch (error) {
            next(error);
        }
    }
}
