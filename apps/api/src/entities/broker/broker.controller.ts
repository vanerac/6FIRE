import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import configuration from '../../../configuration';

const client = new PrismaClient();

export default class BrokerController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { isAdmin } = req.user;
            const where = isAdmin ? {} : { displayed: true };
            const brokers = await client.broker.findMany({
                where,
            });
            res.json(brokers);
        } catch (error) {
            next(error);
        }
    }

    static async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const broker = await client.broker.findFirst({
                where: { id:+id },
            });
            res.json(broker);
        } catch (error) {
            next(error);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, url } = req.body;
            // @ts-ignore
            const { image } = req.files;
            const broker = await client.broker.create({
                data: {
                    name,
                    url,
                    imageUrl: image ? path.join(configuration.BACKEND_URL, 'public/', image[0].filename) : undefined,
                },
            });
            res.json(broker);
        } catch (error) {
            next(error);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { name, url } = req.body;
            const broker = await client.broker.update({
                where: { id:+id },
                data: {
                    name,
                    url,
                },
            });
            res.json(broker);
        } catch (error) {
            next(error);
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const broker = await client.broker.delete({
                where: { id:+id },
            });
            res.json(broker);
        } catch (error) {
            next(error);
        }
    }
}
