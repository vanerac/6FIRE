import { Request, Response } from 'express';
import { CRUDController } from '../../types';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserController implements CRUDController {
    public static async getAll(req: Request, res: Response) {
        const users = prisma.user.findMany({
            select: {
                password: false,
            },
        });
        res.json(users);
    }

    public static async getOne(req: Request, res: Response) {
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
    }

    public static async create(req: Request, res: Response) {
        const { body } = req;
        const user = await prisma.user.create({
            data: {
                ...body,
            },
        });
        res.json(user);
    }

    public static async update(req: Request, res: Response) {
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
    }

    public static async delete(req: Request, res: Response) {
        const { id } = req.params;
        const user = await prisma.user.delete({
            where: {
                id: +id,
            },
        });
        res.json(user);
    }
}
