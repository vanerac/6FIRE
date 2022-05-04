import { CRUDController } from '../../types';
import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AWSsendEmail } from '../../tools/notifications.tools';
import { generateConfirmationEmail } from '../../templates/email';
import MollieService from '../../tools/payment/mollie.service';
import PaylineService from '../../tools/payment/payline.service';
import { PaymentService, PaymentType } from '../../tools/payment/payment.service';
import configuration from '../../../configuration';

import ngrok from 'ngrok';

const prisma = new PrismaClient();
// const paylineWebService = new PaylineWeb(paylineConfig);

const services = {
    mollie: MollieService,
    payline: PaylineService,
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
            const { paymentId, provider } = req.params;

            const service: PaymentService = services[provider];

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const payment = await service.getPayment(paymentId);

            res.status(200).json(payment);
        } catch (error) {
            next(error);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const service = MollieService;

            const { subscriptionId, provider } = req.body;

            const subscription = await prisma.subscription.findFirst({
                where: {
                    id: +subscriptionId,
                },
            });

            if (!subscription) {
                throw new Error('Subscription not found');
            }

            const customer = await service.getCustomer(req.user);

            // const ngrok = require('ngrok');

            configuration.BACKEND_URL = `${await ngrok.connect(3333)}/api`;
            console.log(configuration.BACKEND_URL);

            const paymentIntent = await service.createPaymentIntent(
                {
                    paymentType: PaymentType.SUBSCRIPTION,
                    subscription: subscription as any,
                    // userSubscriptionId: userSubscription.id.toString(),
                    clientId: customer.id,
                    amount: subscription.price,
                    description: subscription.description,
                    currency: 'EUR',
                },
                {
                    cancelUrl: configuration.BACKEND_URL + '/payment/status',
                    statusUrl: configuration.BACKEND_URL + '/payment/webhook/mollie',
                    successUrl: configuration.BACKEND_URL + '/payment/status',
                    failUrl: configuration.BACKEND_URL + '/payment/status',
                },
            );

            await prisma.userSubscription.create({
                data: {
                    User: {
                        connect: {
                            id: req.user.id,
                        },
                    },
                    Subscription: {
                        connect: {
                            id: subscription.id,
                        },
                    },
                    paymentId: paymentIntent.id,
                    status: 'pending',
                    // userId: req.user.id,
                    // subscriptionId: subscription.id as number,
                    price: subscription.price,
                    customerId: customer.id,
                    paymentProdvider: provider as string,
                },
            });

            console.log(Object.keys(paymentIntent));
            console.log(paymentIntent);

            res.status(200).json((paymentIntent as any).getPaymentUrl());
            // const { subscriptionId, offerId, paymentProvider } = req.body;
            // const { user } = req;

            // Request gives us: subscriptionId, offerId, user (session info)
            // We check that the subscriptionId is valid
            // const subscription = await prisma.subscription.findFirst({
            //     where: {
            //         id: +subscriptionId,
            //     },
            // });
            //
            // // We check that the offerId is valid
            // // Todo: verify if offer is valid
            // const offer = await prisma.offer.findFirst({
            //     where: {
            //         id: +offerId,
            //     },
            // });

            // we apply the offer to the subscription price
            // let { price } = subscription;
            // if (offer) {
            //     //TODO verify that the offer is valid
            //
            //     if (offer.offerType === 'POURCENTAGE') {
            //         price = price - (price * offer.value) / 100;
            //     } else {
            //         price = price - offer.value;
            //     }
            // }

            // we create a mollie customer
            // const customer = await mollieClient.customers.create({
            //     name: user.firstName,
            //     email: user.email,
            // });

            // let payment;
            // depending on the subscription type, we create a payment or a subscription
            // if (subscription.subscriptionType === PaymentType.ONETIME) {
            //     // we create a payment
            //     // payment = await mollieClient.payments.create({
            //     //     amount: {
            //     //         value: price.toString(),
            //     //         currency: 'EUR',
            //     //     },
            //     //     description: 'My first API payment',
            //     //     redirectUrl: 'https://yourwebshop.example.org/order/123456',
            //     //     webhookUrl: 'https://yourwebshop.example.org/webhook',
            //     //     metadata: {
            //     //         subscriptionId,
            //     //         offerId,
            //     //     },
            //     //     customerId: customer.id,
            //     // });
            // } else {
            //     // we create a subscription
            //     // payment = await mollieClient.customers_subscriptions.create({
            //     //     amount: {
            //     //         value: price.toString(),
            //     //         currency: 'EUR',
            //     //     },
            //     //     customerId: customer.id,
            //     //     webhookUrl: `${process.env.APP_URL}/api/payments/webhook`,
            //     //     testmode: process.env.NODE_ENV === 'development',
            //     //     description: subscription.description,
            //     //     interval: subscription.refreshRate.toString(), // invalid
            //     //     startDate: new Date().toISOString(),
            //     // });
            // }

            // we store the payment id and the customer id in the database
            // Todo: does the user already have a subscription?
            //  if so, we need to update the subscription
            // await prisma.userSubscription.create({
            //     data: {
            //         User: {
            //             connect: {
            //                 id: user.id,
            //             },
            //         },
            //         Subscription: {
            //             connect: {
            //                 id: subscription.id,
            //             },
            //         },
            //         price: price,
            //         paymentId: payment.id,
            //         customerId: customer.id,
            //         status: 'PENDING',
            //     },
            // });

            // await prisma.offerUsage.create({
            //     data: {
            //         User: {
            //             connect: {
            //                 id: user.id,
            //             },
            //         },
            //         Offer: {
            //             connect: {
            //                 id: offer.id,
            //             },
            //         },
            //     },
            // });
            //
            // res.status(200).json({
            //     paymentUrl: payment.getPaymentUrl(),
            // });
        } catch (error) {
            next(error);
        }
    }

    // @deprecated
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
            const { id, provider } = req.params;
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
            const service: PaymentService = services[provider];

            if (!service) {
                throw new Error('Provider not found');
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            await service.cancelSubscription(payment.customerId, payment.paymentId);
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

    static async mollieWebhooksStatus(req: Request, res: Response) {
        const { id } = req.body;

        const status = await MollieService.getPayment(id);

        if (!status) {
            return res.sendStatus(200);
        }

        const subscription = await prisma.userSubscription.findFirst({
            where: {
                paymentId: id,
            },
            select: {
                Subscription: true,
                User: true,
                id: true,
                createdAt: true,
                updatedAt: true,
                price: true,
            },
        });

        if (!subscription) {
            return res.sendStatus(200);
        }

        if (status.status === 'canceled' || status.status === 'failed' || status.status === 'expired') {
            await prisma.userSubscription.update({
                where: {
                    id: subscription.id,
                },
                data: {
                    status: status.status,
                },
            });
            // Todo: send failed email
        } else if (status.status === 'paid') {
            await prisma.userSubscription.update({
                where: {
                    id: subscription.id,
                },
                data: {
                    status: 'active',
                },
            });
            await AWSsendEmail({
                email: subscription.User.email,
                subject: '6FIRE - Confirmation commande',
                htmlMessage: generateConfirmationEmail({
                    name: subscription.User.firstName,
                    price: subscription.price.toString(), // format might not be right
                    refresh: subscription.Subscription.refreshRate.toString(), // Format might not be right
                    subscription: subscription.Subscription.name,
                    orderDate: new Date(subscription.createdAt).toLocaleDateString(), // format might not be right
                    email: subscription.User.email,
                }),
            });
        }
    }

    //createRefund
    static async createRefund(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, provider } = req.params;
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
            const service: PaymentService = services[provider];
            if (!service) {
                throw new Error('Provider not found');
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const refund = await service.createRefund(payment.customerId, payment.paymentId);
            res.status(200).json(refund);
        } catch (error) {
            next(error);
        }
    }

    //paylineWebhooksStatus
    static async paylineWebhooksStatus(req: Request, res: Response) {
        res.sendStatus(501);

        // const paylineWebService = new PaylineWeb(paylineConfig);
        // const { id } = req.body;

        // const status = await PaylineService.getPayment(id);
        //
        // if (!status) {
        //     return res.sendStatus(200);
        // }
        //
        // const subscription = await prisma.userSubscription.findFirst({
        //     where: {
        //         paymentId: id,
        //     },
        //     select: {
        //         Subscription: true,
        //         User: true,
        //         id: true,
        //         createdAt: true,
        //         updatedAt: true,
        //         price: true,
        //     },
        // });
        //
        // if (!subscription) {
        //     return res.sendStatus(200);
        // }
    }

    static redirectMollie(req: Request, res: Response) {
        res.sendStatus(200);
    }
}
