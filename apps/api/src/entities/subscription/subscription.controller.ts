import { NextFunction, Request, Response } from 'express';
import { PaymentType, PrismaClient } from '@prisma/client';
import { CRUDController } from '../../types';

// import { PaymentType } from '../../tools/payment/payment.service';

const prisma = new PrismaClient();
// const mollieClient = createMollieClient({ apiKey: configuration.MOLLIE_API_KEY });

export default class SubscriptionController extends CRUDController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { isAdmin } = req.user;
            const args = {
                where: {
                    hidden: false,
                },
                include: {
                    UserSubscription: true,
                },
            };
            if (isAdmin) {
                delete args.where;
            }
            const subscriptions = await prisma.subscription.findMany(args);
            res.json(subscriptions);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { isAdmin } = req.user;
            const where = { id: +id };
            if (!isAdmin) {
                Object.assign(where, {
                    hidden: true,
                });
            }
            const subscription = await prisma.subscription.findFirst({
                where,
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
            const { body } = req;
            const { subscriptionType, ...params } = body;
            const subscription = await prisma.subscription.create({
                data: {
                    ...params,
                    subscriptionType:
                        subscriptionType === 'SUBSCRIPTION' ? PaymentType.SUBSCRIPTION : PaymentType.ONETIME,
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

            const { body } = req;

            const subscription = await prisma.subscription.update({
                where: {
                    id: +id,
                },
                data: {
                    ...body,
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
