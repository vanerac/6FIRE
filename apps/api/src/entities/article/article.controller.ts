import { ApiError, CRUDController } from '../../types';
import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { getSubscriptionLevel } from '../../tools/subscription.tool';

const prisma = new PrismaClient();

export default class ArticleController implements CRUDController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: userId, isAdmin } = req.user;
            const { page = 0, limit = 20 } = req.query;

            const userSubscriptionLevel = await getSubscriptionLevel(userId);
            const args: any = {
                where: {
                    hidden: false,
                    Theme: {
                        subscriptionLevel: {
                            lte: userSubscriptionLevel,
                        },
                    },
                },
                take: +limit,
                skip: Math.max(0, +page - 1) * +limit,
                select: {
                    id: true,
                    title: true,
                    content: true,
                    createdAt: true,
                    updatedAt: true,
                    themeId: true,
                    bannerUrl: true,
                    headerUrl: true,
                    Theme: {
                        select: {
                            name: true,
                            iconUrl: true,
                        },
                    },
                },
                orderBy: {
                    createdAt: 'desc',
                },
            };
            if (isAdmin) {
                delete args.where;
                delete args.hidden;
            }
            const articles = await prisma.article.findMany(args);
            res.status(200).json(articles);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: articleId } = req.params;
            const { id: userId, isAdmin } = req.user;
            const userSubscriptionLevel = await getSubscriptionLevel(userId);
            if (!userSubscriptionLevel && !isAdmin) {
                next(
                    new ApiError({
                        message: 'User subscription level not found',
                        status: 403,
                        i18n: 'error.article.forbidden',
                    }),
                );
            }

            let where = {
                id: +articleId,
                hidden: false,
                Theme: {
                    subscriptionLevel: {
                        lte: userSubscriptionLevel,
                    },
                },
            };
            if (isAdmin) {
                where = {
                    id: +articleId,
                } as any;
            }

            const article = await prisma.article.findFirst({
                where,
                select: {
                    id: true,
                    title: true,
                    content: true,
                    createdAt: true,
                    updatedAt: true,
                    themeId: true,
                    headerUrl: true,
                    bannerUrl: true,
                    podcastUrl: true,
                    Theme: {
                        select: {
                            name: true,
                            iconUrl: true,
                        },
                    },
                    ArticleRecommandation: {
                        // where: {
                        //     Recommandation: {
                        //         Article: {
                        //             Theme: {
                        //                 subscriptionLevel: {
                        //                     lte: userSubscriptionLevel,
                        //                 },
                        //             },
                        //         },
                        //     },
                        // },
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
                                            bannerUrl: true,
                                            headerUrl: true,
                                            Theme: {
                                                select: {
                                                    name: true,
                                                    iconUrl: true,
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });
            if (!article) {
                return next(
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
                bannerUrl,
                headerUrl,
                podcastUrl
            } = req.body;
            const article = await prisma.article.create({
                data: {
                    title,
                    content,
                    themeId: themeId,
                    hidden: false,
                    bannerUrl,
                    headerUrl,
                    description,
                    salaireMoy,
                    tarificationMoy,
                    outils,
                    creation,
                    utilisateurs,
                    necessiteAudicance,
                    financement,
                    podcastUrl
                },
            });
            if (recommendedArticleIds?.length) {
                await Promise.all(
                    recommendedArticleIds.map(async (recommendedArticleId) => {
                        let recommandedId = recommendedArticleId;
                        const recommendationId = await prisma.recommandation.findFirst({
                            where: {
                                articleId: +recommendedArticleId,
                            },
                        });
                        if (!recommendationId) {
                            const r = await prisma.recommandation.create({
                                data: {
                                    articleId: +recommendedArticleId,
                                },
                                select: {
                                    id: true,
                                },
                            });
                            recommandedId = r.id;
                        }
                        await prisma.articleRecommandation.create({
                            data: {
                                recommandedArticleId: recommandedId,
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
                bannerUrl,
                headerUrl,
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
                    bannerUrl,
                    headerUrl,
                    financement,
                },
            });
            if (recommendedArticleIds.length > 0) {
                await Promise.all(
                    recommendedArticleIds.map(async (recommendedArticleId) => {
                        let recommandedId = recommendedArticleId;
                        const recommendationId = await prisma.recommandation.findFirst({
                            where: {
                                articleId: +recommendedArticleId,
                            },
                        });
                        if (!recommendationId) {
                            const r = await prisma.recommandation.create({
                                data: {
                                    articleId: +recommendedArticleId,
                                },
                                select: {
                                    id: true,
                                },
                            });
                            recommandedId = r.id;
                        }
                        await prisma.articleRecommandation.create({
                            data: {
                                recommandedArticleId: recommandedId,
                                referenceArticleId: article.id,
                            },
                        });
                    }),
                );
            }
            res.status(200).json(article);
        } catch (error) {
            console.log(error);
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

            // const [$http, $base, $public, headerPath] = article.headerUrl.split('/');
            // const [$http2, $base2, $public2, bannerPath] = article.bannerUrl.split('/');
            // fs.unlinkSync(path.join(configuration.UPLOAD_DIR, headerPath));
            // fs.unlinkSync(path.join(configuration.UPLOAD_DIR, bannerPath));

            res.status(200).json(article);
        } catch (error) {
            next(error);
        }
    }

    static async getByTheme(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: themeId } = req.params;
            const { page = 0, limit = 20 } = req.query;
            const { id: userId, isAdmin } = req.user;

            const userSubscriptionLevel = await getSubscriptionLevel(userId);
            const where = {
                themeId: +themeId,
                Theme: {
                    subscriptionLevel: {
                        lte: userSubscriptionLevel,
                    },
                },
                hidden: false,
            };
            if (isAdmin) {
                where.hidden = false;
                where.Theme = {
                    subscriptionLevel: {
                        lte: userSubscriptionLevel,
                    },
                };
            }
            const args: any = {
                where,
                skip: Math.max(0, +page - 1) * +limit,
                take: +limit,
                select: {
                    id: true,
                    title: true,
                    content: true,
                    createdAt: true,
                    updatedAt: true,
                    themeId: true,
                    bannerUrl: true,
                    headerUrl: true,
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
                orderBy: {
                    createdAt: 'desc',
                },
            };
            if (isAdmin) {
                delete args.where.Theme;
                delete args.where.hidden;
            }

            console.log(args);
            const articles = await prisma.article.findMany(args);
            console.log(articles);
            res.status(200).json(articles);
        } catch (error) {
            next(error);
        }
    }
}
