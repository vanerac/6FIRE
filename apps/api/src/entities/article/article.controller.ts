import { ApiError, CRUDController } from '../../types';
import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import configuration from '../../../configuration';
import * as fs from 'fs';

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
            if (!userSubscriptionLevel) {
                next(
                    new ApiError({
                        message: 'User subscription level not found',
                        status: 403,
                        i18n: 'error.article.forbidden',
                    }),
                );
            }

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
            if (!article) {
                next(
                    new ApiError({
                        message: 'Article not found',
                        status: 404,
                        i18n: 'error.article.not_found',
                    }),
                );
            }
            res.status(200).json(article);
        } catch (error) {
            next(error);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { banner, header } = req.files;
        console.log(banner, header);
        try {
            const { title, content, themeId, recommendedArticleIds } = req.body;
            const article = await prisma.article.create({
                data: {
                    title,
                    content,
                    themesId: +themeId,
                    hidden: false,
                    bannerUrl: banner ? path.join(configuration.BACKEND_URL, 'public/', banner[0].filename) : null,
                    headerUrl: header ? path.join(configuration.BACKEND_URL, 'public/', header[0].filename) : null,
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
            console.error(error);
            next(error);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: articleId } = req.params;
            const { title, content, themesId, recommendedArticleIds } = req.body;
            // Todo: update photo
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

            const [$http, $base, $public, headerPath] = article.headerUrl.split('/');
            const [$http2, $base2, $public2, bannerPath] = article.bannerUrl.split('/');
            fs.unlinkSync(path.join(configuration.UPLOAD_DIR, headerPath));
            fs.unlinkSync(path.join(configuration.UPLOAD_DIR, bannerPath));

            res.status(200).json(article);
        } catch (error) {
            next(error);
        }
    }
}
