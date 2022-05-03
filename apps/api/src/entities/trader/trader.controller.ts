import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class TraderController {
    static async getCuration(req: Request, res: Response, next: NextFunction) {
        try {
            const curation = await prisma.curatedTrader.findMany({
                where: {
                    displayed: true,
                },
                select: {
                    id: true,
                    name: true,
                    clientId: true,
                    TraderFollows: {
                        select: {
                            User: {
                                select: {
                                    id: true,
                                },
                            },
                        },
                    },
                },
            });

            // map TraderFollows to isFollowing boolean
            const curationWithFollows = curation.map((trader) => {
                const isFollowing = trader.TraderFollows.some((follow) => +follow.User.id === req.user.id);
                delete trader.TraderFollows;
                return {
                    ...trader,
                    isFollowing,
                };
            });

            res.status(200).json(curationWithFollows);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const trader = await prisma.curatedTrader.findFirst({
                where: {
                    id: +req.params.id,
                },
                select: {
                    id: true,
                    name: true,
                    clientId: true,
                    TraderFollows: {
                        select: {
                            User: {
                                select: {
                                    id: true,
                                },
                            },
                        },
                    },
                },
            });

            // map TraderFollows to isFollowing boolean

            res.status(200).json(trader);
        } catch (error) {
            next(error);
        }
    }

    static async deleteTrader(req: Request, res: Response, next: NextFunction) {
        try {
            await prisma.curatedTrader.delete({
                where: {
                    id: +req.params.id,
                },
            });

            res.status(200).json({
                message: 'Trader deleted',
            });
        } catch (error) {
            next(error);
        }
    }

    static async createTrader(req: Request, res: Response, next: NextFunction) {
        try {
            const trader = await prisma.curatedTrader.create({
                data: {
                    name: req.body.name,
                    clientId: req.body.clientId,
                    displayed: true,
                    rank: req.body.rank,
                },
                select: {
                    id: true,
                    name: true,
                    clientId: true,
                },
            });

            res.status(200).json(trader);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async updateTrader(req: Request, res: Response, next: NextFunction) {
        try {
            const trader = await prisma.curatedTrader.update({
                where: {
                    id: +req.params.id,
                },
                data: {
                    name: req.body.name,
                    clientId: req.body.clientId,
                    displayed: req.body.displayed,
                    rank: req.body.rank,
                },
                select: {
                    id: true,
                    name: true,
                    clientId: true,
                    displayed: true,
                    rank: true,
                },
            });

            res.status(200).json({
                trader,
            });
        } catch (error) {
            next(error);
        }
    }

    static async setCuration(req: Request, res: Response, next: NextFunction) {
        // upsert, array of clientId and names from req.body
        // update if displayed is edited
        const data = req.body;

        console.log(data);
        try {
            await Promise.all(
                data.map(async (trader) => {
                    await prisma.curatedTrader.upsert({
                        where: {
                            id: trader.id ?? -1,
                        },
                        update: {
                            name: trader.name,
                            displayed: trader.displayed,
                        },
                        create: {
                            clientId: trader.clientId,
                            name: trader.name,
                            displayed: trader.displayed,
                            rank: trader.rank ?? 0,
                        },
                    });
                }),
            );

            res.status(200).json({
                message: 'Successfully updated curation',
            });
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    static async followTrader(req: Request, res: Response, next: NextFunction) {
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
        } catch (error) {
            next(error);
        }
    }

    static async unfollowTrader(req: Request, res: Response, next: NextFunction) {
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
        } catch (error) {
            next(error);
        }
    }

    static async getFollowing(req: Request, res: Response, next: NextFunction) {
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
        } catch (error) {
            next(error);
        }
    }

    static async getFollowers(req: Request, res: Response, next: NextFunction) {
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
        } catch (error) {
            next(error);
        }
    }
}
