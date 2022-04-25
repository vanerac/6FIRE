import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

const prisma = new PrismaClient();

export default class AffiliationController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const affiliations = await prisma.affiliation.findMany({
                where: {
                    displayed: true,
                },
            });
            res.json(affiliations);
        } catch (e) {
            next(e);
        }
    }

    static async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const affiliation = await prisma.affiliation.findFirst({
                where: {
                    id: +id,
                },
            });
            res.json(affiliation);
        } catch (e) {
            next(e);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, url, color } = req.body;
            // get file from multer
            const { file } = req;

            const affiliation = await prisma.affiliation.create({
                data: {
                    name,
                    url,
                    color,
                    icon: file.path,
                },
            });
            res.json(affiliation);
        } catch (e) {
            next(e);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { name, url, color, icon } = req.body;
            const affiliation = await prisma.affiliation.update({
                where: {
                    id: +id,
                },
                data: {
                    name,
                    url,
                    color,
                    icon,
                },
            });
            res.json(affiliation);
        } catch (e) {
            next(e);
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const affiliation = await prisma.affiliation.delete({
                where: {
                    id: +id,
                },
            });
            res.json(affiliation);
        } catch (e) {
            next(e);
        }
    }
}
