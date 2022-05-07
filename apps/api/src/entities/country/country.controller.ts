import { CRUDController } from '../../types';
import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class CountryController implements CRUDController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const countries = await prisma.country.findMany();
            res.status(200).json(countries);
        } catch (error) {
            next(error);
        }
    }

    static async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const country = await prisma.country.findFirst({
                where: {
                    id: +id,
                },
            });
            res.status(200).json(country);
        } catch (error) {
            next(error);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const country = await prisma.country.create({
                data: {
                    ...req.body,
                },
            });
            res.status(201).json(country);
        } catch (error) {
            next(error);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
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
            next(error);
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const country = await prisma.country.delete({
                where: {
                    id: +id,
                },
            });
            res.status(200).json(country);
        } catch (error) {
            next(error);
        }
    }
}
