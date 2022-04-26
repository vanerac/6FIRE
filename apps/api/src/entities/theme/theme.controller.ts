import { NextFunction, Request, Response } from 'express';
import { CRUDController } from '../../types';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import configuration from '../../../configuration';

const client = new PrismaClient();

export default class ThemeController implements CRUDController {
    static async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const themes = await client.theme.findMany();
            res.status(200).json(themes);
        } catch (error) {
            next(error);
        }
    }

    static async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const theme = await client.theme.findFirst({ where: { id: +id } });
            res.status(200).json(theme);
        } catch (error) {
            next(error);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const icon = req.file;
            const { name, subscriptionLevel } = req.body;
            const theme = await client.theme.create({
                data: {
                    name,
                    subscriptionLevel,
                    iconUrl: path.join(configuration.BACKEND_URL, 'public/', icon.filename),
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
            const { name, subscriptionLevel } = req.body;
            const theme = await client.theme.update({
                where: { id: +id },
                data: { name, subscriptionLevel },
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
            res.status(200).json(theme);
        } catch (error) {
            next(error);
        }
    }
}
