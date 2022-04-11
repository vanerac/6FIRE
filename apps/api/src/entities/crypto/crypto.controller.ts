import { CRUDController } from '../../types';
import { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class CryptoController implements CRUDController {
    static async getAll(req: Request, res: Response) {
        const cryptos = await prisma.cryptoHolding.findMany();
        const journal = await prisma.cryptoJournal.findMany();
        res.json({ cryptos, journal });
    }

    static async setCryptos(req: Request, res: Response) {
        const { cryptos } = req.body;
        const newCryptos = await prisma.cryptoHolding.createMany(cryptos);
        res.json(newCryptos);
    }

    static async setMessage(req: Request, res: Response) {
        const { message } = req.body;
        const newMessage = await prisma.cryptoJournal.create({
            data: {
                message,
            },
        });
        res.json(newMessage);
    }
}
