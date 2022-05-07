import { ApiError, CRUDController } from '../../types';
import { NextFunction, Request, Response } from 'express';
import axios from 'axios';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class CryptoController implements CRUDController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const cryptos = await prisma.cryptoHolding.findMany();
            const journal = await prisma.cryptoJournal.findFirst();
            res.json({ cryptos, journal });
        } catch (error) {
            next(error);
        }
    }

    static async setCryptos(req: Request, res: Response, next: NextFunction) {
        try {
            const cryptos = req.body;
            console.log(cryptos);
            const newCryptos = await prisma.cryptoHolding.createMany({ data: cryptos });
            res.json(newCryptos);
        } catch (error) {
            next(error);
        }
    }

    static async setMessage(req: Request, res: Response, next: NextFunction) {
        try {
            const { message } = req.body;
            const newMessage = await prisma.cryptoJournal.create({
                data: {
                    message,
                },
            });
            res.json(newMessage);
        } catch (error) {
            next(error);
        }
    }

    static async searchCoin(req: Request, res: Response, next: NextFunction) {
        try {
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
                return next(
                    new ApiError({
                        message: error_message,
                        status: status,
                        i18n: 'error.api.coinmarketcap',
                    }),
                );
            } else {
                res.json(coin);
            }
        } catch (error) {
            next(error);
        }
    }

    static async getCoinValue(req: Request, res: Response, next: NextFunction) {
        try {
            const { coinId } = req.params;
            const params = {
                convert: 'EUR',
            };
            const coin = await prisma.cryptoHolding.findFirst({
                where: { id: +coinId },
            });

            // if coin value only updated after 10m then update it
            if (coin.updatedAt.getTime() < new Date().getTime() - 60000) {
                const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${coinId}&${new URLSearchParams(
                    params,
                )}`;
                const response = await axios.get(url, {
                    headers: {
                        'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY,
                    },
                });
                const { data } = response;
                const {
                    status: { error_code },
                    error_message,
                    data: coinValue,
                } = data;

                console.log(data);
                if (error_code !== 0 || !coinValue?.['1']) {
                    return next(
                        new ApiError({
                            message: error_message,
                            status: error_code,
                            i18n: 'error.api.coinmarketcap',
                        }),
                    );
                }
                const { quote } = coinValue['1'];

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
            } else {
                res.json(coin);
            }
        } catch (error) {
            next(error);
        }
    }

    static async getCoinImg(req: Request, res: Response, next: NextFunction) {
        try {
            // Coin token
            const { coin } = req.params;

            const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info';

            const data = await axios.get(url, {
                params: {
                    symbol: coin,
                },
                headers: {
                    'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY,
                },
            });
            res.json({ imgUrl: data.data.data[coin.toUpperCase()]?.logo });
        } catch (error) {
            next(error);
        }
    }
}
