import { Request, Response } from 'express';
import { CRUDController } from '../../types';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserController implements CRUDController {
    public static async getAll(req: Request, res: Response) {
        try {
            const users = prisma.user.findMany({
                select: {
                    password: false,
                },
            });
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public static async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await prisma.user.findFirst({
                where: {
                    id: +id,
                },
                select: {
                    password: false,
                },
            });
            res.json(user);
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    public static async create(req: Request, res: Response) {
        try {
            const { body } = req;
            const user = await prisma.user.create({
                data: {
                    ...body,
                },
            });
            res.json(user);
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    public static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { body } = req;
            const user = await prisma.user.update({
                where: {
                    id: +id,
                },
                data: {
                    ...body,
                },
            });
            res.json(user);
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    public static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await prisma.user.delete({
                where: {
                    id: +id,
                },
            });
            res.json(user);
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }
}
