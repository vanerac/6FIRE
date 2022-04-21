import { CRUDController } from '../../types';
import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class ArticleController implements CRUDController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: userId } = req.user;
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
            next(error);
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: articleId } = req.params;
            const { id: userId } = req.user;
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
                    ArticleRecommandation: {
                        select: {
                            // id: false,
                            // recommandedArticleId: false,
                            Recommandation: {
                                select: {
                                    Article: {
                                        select: {
                                            id: true,
                                            title: true,
                                            content: true,
                                            createdAt: true,
                                            updatedAt: true,
                                            themesId: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });
            res.status(200).json(article);
        } catch (error) {
            next(error);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { title, content, themeId, recommendedArticleIds } = req.body;
            const article = await prisma.article.create({
                data: {
                    title,
                    content,
                    themesId: +themeId,
                    hidden: false,
                },
            });
            if (recommendedArticleIds?.length) {
                await Promise.all(
                    recommendedArticleIds.map(async (recommendedArticleId) => {
                        const recommandationId = await prisma.recommandation.create({
                            data: {
                                articleId: +recommendedArticleId,
                            },
                        });
                        await prisma.articleRecommandation.create({
                            data: {
                                recommandedArticleId: +recommandationId.id,
                                referenceArticleId: article.id,
                            },
                        });
                    }),
                );
            }
            res.status(200).json(article);
        } catch (error) {
            next(error);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: articleId } = req.params;
            const { title, content, themesId, recommendedArticleIds } = req.body;
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
            if (recommendedArticleIds.length > 0) {
                await Promise.all(
                    recommendedArticleIds.map(async (recommendedArticleId) => {
                        await prisma.articleRecommandation.create({
                            data: {
                                recommandedArticleId: recommendedArticleId,
                                referenceArticleId: article.id,
                            },
                        });
                    }),
                );
            }
            res.status(200).json(article);
        } catch (error) {
            next(error);
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: articleId } = req.params;
            const article = await prisma.article.delete({
                where: {
                    id: +articleId,
                },
            });
            res.status(200).json(article);
        } catch (error) {
            next(error);
        }
    }
}
