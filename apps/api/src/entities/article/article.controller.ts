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
            const { id: userId, isAdmin } = req.user;
            const { page = 0, limit = 20 } = req.query;

            let where = {};
            if (!isAdmin) {
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
                where = {
                    hidden: false,
                    Theme: {
                        subscriptionLevel: {
                            lte: userSubscriptionLevel?.Subscription.level,
                        },
                    },
                };
            }
            const articles = await prisma.article.findMany({
                where: where,
                take: +limit,
                skip: Math.max(0, +page - 1) * +limit,
                select: {
                    id: true,
                    title: true,
                    content: true,
                    createdAt: true,
                    updatedAt: true,
                    themeId: true,
                    Theme: {
                        select: {
                            name: true,
                            iconUrl: true,
                        },
                    },
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
            const { id: userId, isAdmin } = req.user;
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

            const where = {
                id: +articleId,
                hidden: undefined,
                Theme: undefined,
            };
            if (!isAdmin) {
                where.hidden = false;
                where.Theme = {
                    subscriptionLevel: {
                        lte: userSubscriptionLevel?.Subscription.level,
                    },
                };
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
                    themeId: true,
                    Theme: {
                        select: {
                            name: true,
                            iconUrl: true,
                        },
                    },
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
                                            themeId: true,
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
            const {
                title,
                content,
                themeId,
                recommendedArticleIds,
                description,
                salaireMoy,
                tarificationMoy,
                outils,
                creation,
                utilisateurs,
                necessiteAudicance,
                financement,
            } = req.body;
            const article = await prisma.article.create({
                data: {
                    title,
                    content,
                    themeId: +themeId,
                    hidden: false,
                    bannerUrl: banner ? path.join(configuration.BACKEND_URL, 'public/', banner[0].filename) : null,
                    headerUrl: header ? path.join(configuration.BACKEND_URL, 'public/', header[0].filename) : null,
                    description,
                    salaireMoy,
                    tarificationMoy,
                    outils,
                    creation,
                    utilisateurs,
                    necessiteAudicance,
                    financement,
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
            const {
                title,
                content,
                themeId,
                recommendedArticleIds,
                description,
                salaireMoy,
                tarificationMoy,
                outils,
                creation,
                utilisateurs,
                necessiteAudicance,
                financement,
            } = req.body;
            const article = await prisma.article.update({
                where: {
                    id: +articleId,
                },
                data: {
                    title,
                    content,
                    themeId,
                    description,
                    salaireMoy,
                    tarificationMoy,
                    outils,
                    creation,
                    utilisateurs,
                    necessiteAudicance,
                    financement,
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
