import { CRUDController } from '../../types';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class ArticleController implements CRUDController {
    static async getAll(req: Request, res: Response) {
        try {
            const { userId } = req.session;
            const userSubscriptionLevel = await prisma.userSubscription.findFirst({
                where: {
                    userId,
                },
                select: {
                    Subscription: {
                        select: {
                            level: true,
                        },
                    },
                },
            });
            const articles = await prisma.article.findMany({
                where: {
                    hidden: false,
                    Theme: {
                        subscriptionLevel: {
                            lte: userSubscriptionLevel?.Subscription.level,
                        },
                    },
                },
                select: {
                    id: true,
                    title: true,
                    content: true,
                    createdAt: true,
                    updatedAt: true,
                    themesId: true,
                },
            });
            res.status(200).json(articles);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id: articleId } = req.params;
            const { userId } = req.session;
            const userSubscriptionLevel = await prisma.userSubscription.findFirst({
                where: {
                    userId,
                },
                select: {
                    Subscription: {
                        select: {
                            level: true,
                        },
                    },
                },
            });

            const article = await prisma.article.findFirst({
                where: {
                    id: +articleId,
                    hidden: false,
                    Theme: {
                        subscriptionLevel: {
                            lte: userSubscriptionLevel?.Subscription.level,
                        },
                    },
                },
                select: {
                    id: true,
                    title: true,
                    content: true,
                    createdAt: true,
                    updatedAt: true,
                    themesId: true,
                },
            });
            res.status(200).json(article);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const { title, content, themesId } = req.body;
            const article = await prisma.article.create({
                data: {
                    title,
                    content,
                    themesId,
                    hidden: false,
                },
            });
            res.status(200).json(article);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id: articleId } = req.params;
            const { title, content, themesId } = req.body;
            const article = await prisma.article.update({
                where: {
                    id: +articleId,
                },
                data: {
                    title,
                    content,
                    themesId,
                },
            });
            res.status(200).json(article);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id: articleId } = req.params;
            const article = await prisma.article.update({
                where: {
                    id: +articleId,
                },
                data: {
                    hidden: true,
                },
            });
            res.status(200).json(article);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
