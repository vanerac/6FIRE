import { CRUDController } from '../../types';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import createMollieClient from '@mollie/api-client';
import configuration from '../../../configuration';

const mollieClient = createMollieClient({ apiKey: configuration.MOLLIE_API_KEY });

const prisma = new PrismaClient();

//enum PaymentType {
//   SUBSCRIPTION
//   ONETIME
// }
//model Payment {
//   id          Int         @id @default(autoincrement())
//   amount      Int
//   userId      Int
//   paymentId   String
//   paymentType PaymentType
//   date        DateTime    @default(now())
//   User        User        @relation(fields: [userId], references: [id])
// }
export default class PaymentController implements CRUDController {
    //  CRUD On payments
    static async getAll(req: Request, res: Response) {
        try {
            // // Retrieve the first 15 payments.
            // const payments = mollieClient.payments.page({ limit: 15 });
            //
            // Todo: add pagination
            // todo: add filter
            // todo: add sort

            const payments = await prisma.payment.findMany();
            res.status(200).json(payments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const payment = await prisma.payment.findFirst({
                where: {
                    id: +id,
                },
            });
            res.status(200).json(payment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getByPaymentId(req: Request, res: Response) {
        try {
            const { paymentId } = req.params;
            const payment = await mollieClient.payments.get(paymentId);
            res.status(200).json(payment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // await mollieClient.payments.create({
    //     amount: {
    //         value: '10.00',
    //         currency: 'EUR',
    //     },
    //     description: 'My first API payment',
    //     redirectUrl: 'https://yourwebshop.example.org/order/123456',
    //     webhookUrl: 'https://yourwebshop.example.org/webhook',
    // });
    // Todo
    static async create(req: Request, res: Response) {
        try {
            const { amount, userId, paymentId, paymentType } = req.body;

            const payment = await prisma.payment.create({
                data: {
                    amount: +amount,
                    userId: +userId,
                    paymentId,
                    paymentType,
                },
            });
            res.status(201).json(payment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { amount, userId, paymentId, paymentType } = req.body;
            const payment = await prisma.payment.update({
                where: {
                    id: +id,
                },
                data: {
                    amount: +amount,
                    userId: +userId,
                    paymentId,
                    paymentType,
                },
            });
            res.status(200).json(payment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const payment = await prisma.payment.delete({
                where: {
                    id: +id,
                },
            });
            res.status(200).json(payment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // static async webhooksStatus(req: Request, res: Response) {
    //     //POST /payments/webhook HTTP/1.0
    //     // Host: webshop.example.org
    //     // Via: 1.1 tinyproxy (tinyproxy/1.8.3)
    //     // Content-Type: application/x-www-form-urlencoded
    //     // Accept: */*
    //     // Accept-Encoding: deflate, gzip
    //     // Content-Length: 16
    //     //
    //     // id=tr_d0b0E3EA3v
    //     // const payment = await mollieClient.payments.get(id);
    //     // update database
    //     // res.sendStatus(200);
    //     //
    //     // const { id } = req.body;
    //     //
    //     // const status = await mollieClient.payments.get(id);
    //     // console.log(status);
    //     //
    //     // //     open = "open",
    //     // //     canceled = "canceled",
    //     // //     pending = "pending",
    //     // //     authorized = "authorized",
    //     // //     expired = "expired",
    //     // //     failed = "failed",
    //     // //     paid = "paid"
    //     //
    //     // if (!status) {
    //     //     return res.sendStatus(404);
    //     // }
    //     //
    //     // await prisma.payment.upsert({
    //     //     where: {
    //     //         paymentId: String(id),
    //     //     },
    //     //     update: {
    //     //         status: status.status,
    //     //     },
    //     //     create: {
    //     //         paymentId: id,
    //     //         status: status.status,
    //     //         amount: status.amount.value,
    //     //         paymentType: status.method,
    //     //     },
    //     // });
    // }
}
