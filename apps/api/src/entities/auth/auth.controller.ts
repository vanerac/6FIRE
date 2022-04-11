import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { checkPassword, generateToken, hashPassword } from '../../tools/auth.tools';

const client = new PrismaClient();

export default class AuthController {
    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const user = await client.user.findFirst({
                where: {
                    email,
                },
                select: {
                    id: true,
                    email: true,
                    password: true,
                },
            });

            if (!user) {
                return res.status(401).json({
                    message: 'Invalid credentials',
                });
            }

            if (!checkPassword(password, user.password)) {
                return res.status(401).json({
                    message: 'Invalid credentials',
                });
            }

            delete user.password;

            const token = generateToken(user);

            return res.json({
                token,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    static async register(req: Request, res: Response) {
        try {
            const { email, password, firstName, lastName, countryId, telephone } = req.body;

            if ([email, password, firstName, lastName, countryId, telephone].includes(undefined)) {
                return res.status(400).json({
                    message: 'Missing required fields',
                });
            }

            const user = await client.user.create({
                data: {
                    firstName,
                    lastName,
                    telephone,
                    country: {
                        connect: {
                            id: +countryId,
                        },
                    },
                    email,
                    password: hashPassword(password),
                },
            });

            delete user.password;

            const token = generateToken(user);

            return res.json({
                token,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    static async logout(req: Request, res: Response) {
        req.session = null;
        res.sendStatus(200);
    }
}
