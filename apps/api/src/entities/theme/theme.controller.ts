import { Request, Response } from 'express';
import { CRUDController } from '../../types';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export default class ThemeController implements CRUDController {
    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const themes = await client.theme.findMany();
            res.status(200).json(themes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getOne(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const theme = await client.theme.findFirst({ where: { id: +id } });
            res.status(200).json(theme);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async create(req: Request, res: Response): Promise<void> {
        try {
            const { name, subscriptionLevel } = req.body;
            const theme = await client.theme.create({ data: { name, subscriptionLevel } });
            res.status(201).json(theme);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { name, subscriptionLevel } = req.body;
            const theme = await client.theme.update({
                where: { id: +id },
                data: { name, subscriptionLevel },
            });
            res.status(200).json(theme);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const theme = await client.theme.delete({ where: { id: +id } });
            res.status(200).json(theme);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
