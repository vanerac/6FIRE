import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CRUDController } from '../../types';

const prisma = new PrismaClient();

export default class SubscriptionController extends CRUDController {
    static async getAll(req: Request, res: Response) {
        try {
            const subscriptions = await prisma.subscription.findMany({
                include: {
                    UserSubscription: true,
                },
            });
            res.json(subscriptions);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req: Request, res: Response) {
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
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const { name, description, price, level } = req.body;
            const subscription = await prisma.subscription.create({
                data: {
                    name,
                    description,
                    price,
                    level,
                },
            });
            res.json(subscription);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req: Request, res: Response) {
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
            res.json(subscription);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const subscription = await prisma.subscription.delete({
                where: {
                    id: +id,
                },
            });
            res.json(subscription);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
