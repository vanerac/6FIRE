import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class TraderController {
    static async getTopTraders(req: Request, res: Response) {
        try {
            throw new Error('Not implemented');
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    static async searchTrader(req: Request, res: Response) {
        try {
            throw new Error('Not implemented');
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    static async getCuration(req: Request, res: Response) {
        try {
            const curation = prisma.curatedTrader.findMany({
                where: {
                    displayed: true,
                },
                select: {
                    id: true,
                    name: true,
                },
            });
            res.status(200).json({
                curation,
            });
        } catch (e) {
            res.status(500).json({
                message: e.message,
            });
        }
    }

    static async setCuration(req: Request, res: Response) {
        // upsert, array of clientId and names from req.body
        // update if displayed is edited
        const { data } = req.body;

        try {
            prisma.curatedTrader.upsert({
                where: {
                    id: data.map((item) => item.id),
                },
                update: {
                    displayed: data.map((item) => item.displayed),
                },
                create: data.map((item) => ({
                    id: item.id,
                    name: item.name,
                    displayed: item.displayed ?? true,
                })),
            });
        } catch (e) {
            res.status(500).json({
                message: e.message,
            });
        }
    }

    static async followTrader(req: Request, res: Response) {
        try {
            const { id: traderId } = req.params;
            const { id: userId } = req.user;

            await prisma.traderFollows.create({
                data: {
                    userId,
                    traderId: +traderId,
                },
            });

            res.status(200).json({
                message: 'Trader followed',
            });
        } catch (e) {
            res.status(500).json({
                message: e.message,
            });
        }
    }

    static async unfollowTrader(req: Request, res: Response) {
        try {
            const { id: traderId } = req.params;
            const { id: userId } = req.user;

            await prisma.traderFollows.deleteMany({
                where: {
                    userId,
                    traderId: +traderId,
                },
            });

            res.status(200).json({
                message: 'Trader unfollowed',
            });
        } catch (e) {
            res.status(500).json({
                message: e.message,
            });
        }
    }

    static async getFollowing(req: Request, res: Response) {
        try {
            const { id: userId } = req.user;

            const traders = await prisma.traderFollows.findMany({
                where: {
                    userId,
                },
                select: {
                    CuratedTrader: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            });

            res.status(200).json({
                traders,
            });
        } catch (e) {
            res.status(500).json({
                message: e.message,
            });
        }
    }

    static async getFollowers(req: Request, res: Response) {
        try {
            const { id: traderId } = req.params;

            const traders = await prisma.traderFollows.findMany({
                where: {
                    traderId: +traderId,
                },
                select: {
                    User: {
                        select: {
                            id: true,
                        },
                    },
                },
            });

            res.status(200).json({
                traders,
            });
        } catch (e) {
            res.status(500).json({
                message: e.message,
            });
        }
    }
}
