import { CRUDController } from '../../types';
import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import createMollieClient from '@mollie/api-client';
import configuration from '../../../configuration';

const mollieClient = createMollieClient({ apiKey: configuration.MOLLIE_API_KEY });

const prisma = new PrismaClient();
export const PaymentType = {
    SUBSCRIPTION: 'SUBSCRIPTION',
    ONETIME: 'ONETIME',
};

export default class PaymentController implements CRUDController {
    //  CRUD On payments
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            // // Retrieve the first 15 payments.
            // const payments = mollieClient.payments.page({ limit: 15 });
            //
            // Todo: add pagination
            // todo: add filter
            // todo: add sort

            const payments = await prisma.userSubscription.findMany();
            res.status(200).json(payments);
        } catch (error) {
            next(error);
        }
    }

    static async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const payment = await prisma.userSubscription.findFirst({
                where: {
                    id: +id,
                },
            });
            res.status(200).json(payment);
        } catch (error) {
            next(error);
        }
    }

    static async getByPaymentId(req: Request, res: Response, next: NextFunction) {
        try {
            const { paymentId } = req.params;
            const payment = await mollieClient.payments.get(paymentId);
            res.status(200).json(payment);
        } catch (error) {
            next(error);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { subscriptionId, offerId } = req.body;
            const { user } = req;

            // Request gives us: subscriptionId, offerId, user (session info)
            // We check that the subscriptionId is valid
            const subscription = await prisma.subscription.findFirst({
                where: {
                    id: +subscriptionId,
                },
            });

            // We check that the offerId is valid
            // Todo: verify if offer is valid
            const offer = await prisma.offer.findFirst({
                where: {
                    id: +offerId,
                },
            });

            // we apply the offer to the subscription price
            let { price } = subscription;
            if (offer) {
                //TODO verify that the offer is valid

                if (offer.offerType === 'POURCENTAGE') {
                    price = price - (price * offer.value) / 100;
                } else {
                    price = price - offer.value;
                }
            }

            // we create a mollie customer
            const customer = await mollieClient.customers.create({
                name: user.firstName,
                email: user.email,
            });

            let payment;
            // depending on the subscription type, we create a payment or a subscription
            if (subscription.subscriptionType === PaymentType.ONETIME) {
                // we create a payment
                payment = await mollieClient.payments.create({
                    amount: {
                        value: price.toString(),
                        currency: 'EUR',
                    },
                    description: 'My first API payment',
                    redirectUrl: 'https://yourwebshop.example.org/order/123456',
                    webhookUrl: 'https://yourwebshop.example.org/webhook',
                    metadata: {
                        subscriptionId,
                        offerId,
                    },
                    customerId: customer.id,
                });
            } else {
                // we create a subscription
                payment = await mollieClient.customers_subscriptions.create({
                    amount: {
                        value: price.toString(),
                        currency: 'EUR',
                    },
                    customerId: customer.id,
                    webhookUrl: `${process.env.APP_URL}/api/payments/webhook`,
                    testmode: process.env.NODE_ENV === 'development',
                    description: subscription.description,
                    interval: subscription.refreshRate.toString(), // invalid
                    startDate: new Date().toISOString(),
                });
            }

            // we store the payment id and the customer id in the database
            // Todo: does the user already have a subscription?
            //  if so, we need to update the subscription
            await prisma.userSubscription.create({
                data: {
                    User: {
                        connect: {
                            id: user.id,
                        },
                    },
                    Subscription: {
                        connect: {
                            id: subscription.id,
                        },
                    },
                    paymentId: payment.id,
                    customerId: customer.id,
                    status: 'PENDING',
                },
            });

            await prisma.offerUsage.create({
                data: {
                    User: {
                        connect: {
                            id: user.id,
                        },
                    },
                    Offer: {
                        connect: {
                            id: offer.id,
                        },
                    },
                },
            });

            res.status(200).json({
                paymentUrl: payment.getPaymentUrl(),
            });
        } catch (error) {
            next(error);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { userId, paymentId } = req.body;
            const payment = await prisma.userSubscription.update({
                where: {
                    id: +id,
                },
                data: {
                    userId: +userId,
                    paymentId,
                },
            });
            res.status(200).json(payment);
        } catch (error) {
            next(error);
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { user } = req;
            const payment = await prisma.userSubscription.findFirst({
                where: {
                    id: +id,
                    userId: +user.id,
                    status: 'ACTIVE',
                },
            });
            if (!payment) {
                throw new Error('Payment not found');
            }
            await mollieClient.customers_subscriptions.cancel(payment.paymentId, {
                customerId: payment.customerId,
            });
            await prisma.userSubscription.delete({
                where: {
                    id: +id,
                },
            });
            res.status(200).json(payment);
        } catch (error) {
            next(error);
        }
    }

    static async webhooksStatus(req: Request, res: Response) {
        const { id } = req.body;

        const status = await mollieClient.payments.get(id);

        if (!status) {
            return res.sendStatus(404);
        }

        const subscription = await prisma.userSubscription.findFirst({
            where: {
                paymentId: id,
            },
        });

        await prisma.userSubscription.update({
            where: {
                id: subscription.id,
            },
            data: {
                status: status.status,
            },
        });
    }
}
