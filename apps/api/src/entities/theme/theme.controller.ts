import { NextFunction, Request, Response } from 'express';
import { CRUDController } from '../../types';
import { PrismaClient } from '@prisma/client';
import { getSubscriptionLevel } from '../../tools/subscription.tool';

const client = new PrismaClient();

export default class ThemeController implements CRUDController {
    static async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id: userId, isAdmin } = req.user;

            if (!isAdmin) {
                const userPermissions = await getSubscriptionLevel(userId);

                const themes = await client.theme.findMany({
                    where: {
                        subscriptionLevel: {
                            lte: userPermissions,
                        },
                    },
                });
                res.status(200).json(themes);
            } else res.status(200).json(await client.theme.findMany());
        } catch (error) {
            next(error);
        }
    }

    static async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const { id: userId, isAdmin } = req.user;
            console.log('isAdmin', isAdmin);
            let where = { id: +id };

            if (!isAdmin) {
                const userPermissions = await getSubscriptionLevel(userId);
                where = Object.assign(where, {
                    subscriptionLevel: {
                        gte: userPermissions,
                    },
                });
            }
            console.log(where);

            const theme = await client.theme.findFirst({
                where,
                select: {
                    id: true,
                    name: true,
                    iconUrl: true,
                },
            });
            console.log(theme);
            res.status(200).json(theme);
        } catch (error) {
            next(error);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { name, subscriptionLevel, iconUrl } = req.body;
            const theme = await client.theme.create({
                data: {
                    name,
                    subscriptionLevel,
                    iconUrl,
                },
            });
            res.status(201).json(theme);
        } catch (error) {
            next(error);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            // Todo: update photo
            const { name, subscriptionLevel, iconUrl } = req.body;
            const theme = await client.theme.update({
                where: { id: +id },
                data: { name, subscriptionLevel, iconUrl },
            });
            res.status(200).json(theme);
        } catch (error) {
            next(error);
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const theme = await client.theme.delete({ where: { id: +id } });
            // const [$http, $base, $public, headerPath] = theme.iconUrl.split('/');
            // fs.unlinkSync(path.join(configuration.UPLOAD_DIR, headerPath));
            res.status(200).json(theme);
        } catch (error) {
            next(error);
        }
    }
}
