import { CRUDController } from '../../types';
import { Request, Response } from 'express';
import axios from 'axios';

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

    static async searchCoin(req: Request, res: Response) {
        const { search } = req.query;
        const params = {
            limit: '10',
            convert: 'USD',
            q: search as any,
        };
        const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/v2/cryptocurrency/info?${new URLSearchParams(
            params,
        )}`;
        const response = await axios.get(url, {
            headers: {
                'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY,
            },
        });
        const { data } = response;
        const { status, error_message, data: coin } = data;
        if (status !== 200) {
            res.status(status).json({ error_message });
        } else {
            res.json(coin);
        }
    }

    static async getCoinValue(req: Request, res: Response) {
        const { coinId } = req.params;
        const params = {
            convert: 'EUR',
        };
        const coin = await prisma.cryptoHolding.findFirst({
            where: { id: +coinId },
        });

        // if coin value only updated after 10m then update it
        if (coin.updatedAt.getTime() < new Date().getTime() - 600000) {
            const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${coinId}&${new URLSearchParams(
                params,
            )}`;
            const response = await axios.get(url, {
                headers: {
                    'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY,
                },
            });
            const { data } = response;
            const { status, error_message, data: coinValue } = data;
            if (status !== 200) {
                res.status(status).json({ error_message });
            } else {
                const { quote } = coinValue;
                const { EUR } = quote;
                const { price } = EUR;
                const newCoin = await prisma.cryptoHolding.update({
                    where: { id: +coinId },
                    data: {
                        price,
                        updatedAt: new Date(),
                    },
                });
                res.json(newCoin);
            }
        } else {
            res.json(coin);
        }
    }

    static async getCoinImg(req: Request, res: Response) {
        const baseUrl = 'https://github.com/ErikThiart/cryptocurrency-icons/tree/master/icons';
        const { coin } = req.params;
        if (!coin) {
            res.status(400).json({ error: 'No coin provided' });
        }
        const imgUrl = `${baseUrl}/${coin}.png`;
        res.json({ imgUrl });
    }
}
