import { CRUDController } from '../../types';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
//model Country {
//   id        Int      @id @default(autoincrement())
//   name      String
//   code      String
//   enabled   Boolean  @default(true)
//   createdAt DateTime @default(now())
//   updatedAt DateTime @default(now())
//   User      User[]
// }

export default class CountryController implements CRUDController {
    static async getAll(req: Request, res: Response) {
        try {
            const countries = await prisma.country.findMany();
            res.status(200).json(countries);
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    static async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const country = await prisma.country.findFirst({
                where: {
                    id: +id,
                },
            });
            res.status(200).json(country);
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const country = await prisma.country.create({
                data: {
                    ...req.body,
                },
            });
            res.status(201).json(country);
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const country = await prisma.country.update({
                where: {
                    id: +id,
                },
                data: {
                    ...req.body,
                },
            });
            res.status(200).json(country);
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const country = await prisma.country.delete({
                where: {
                    id: +id,
                },
            });
            res.status(200).json(country);
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }
}
