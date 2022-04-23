import { NextFunction, Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class OfferController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const offers = await prisma.offer.findMany();
            res.json(offers);
        } catch (e) {
            next(e);
        }
    }

    static async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const offer = await prisma.offer.findFirst({
                where: {
                    id: +id,
                },
            });
            if (!offer) {
                return res.status(404).json({
                    message: 'Offer not found',
                });
            }
            res.json(offer);
        } catch (e) {
            next(e);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { value, offerType, subscriptionId, singleUse } = req.body;
            const offer = await prisma.offer.create({
                data: {
                    value,
                    offerType,
                    subscriptionId,
                    singleUse,
                },
            });
            res.json(offer);
        } catch (e) {
            next(e);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { value, offerType, subscriptionId, singleUse } = req.body;
            const offer = await prisma.offer.update({
                where: {
                    id: +id,
                },
                data: {
                    value,
                    offerType,
                    subscriptionId,
                    singleUse,
                },
            });
            res.json(offer);
        } catch (e) {
            next(e);
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const offer = await prisma.offer.delete({
                where: {
                    id: +id,
                },
            });
            res.json(offer);
        } catch (e) {
            next(e);
        }
    }

    static async getAllUsage(req: Request, res: Response, next: NextFunction) {
        try {
            const offer = await prisma.offerUsage.findMany({});
            res.json(offer);
        } catch (e) {
            next(e);
        }
    }

    static async getUsage(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const offer = await prisma.offerUsage.findMany({
                where: {
                    offerId: +id,
                },
            });
            res.json(offer);
        } catch (e) {
            next(e);
        }
    }
}
