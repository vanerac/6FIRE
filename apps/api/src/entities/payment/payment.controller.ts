import { ApiError, CRUDController } from '../../types';
import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AWSsendEmail } from '../../tools/notifications.tools';
import {
    generateConfirmationEmail,
    generateOrderCancelledEmail,
    generateOrderFailedEmail,
} from '../../templates/email';
import MollieService from '../../tools/payment/mollie.service';
import PaylineService from '../../tools/payment/payline.service';
import { PaymentService, PaymentType } from '../../tools/payment/payment.service';
import configuration from '../../../configuration';

import { v4 as uuid } from 'uuid';

import ngrok from 'ngrok';
import { Payment } from '@mollie/api-client';

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
            const { subscriptionId, provider } = req.body;

            const subscription = await prisma.subscription.findFirst({
                where: {
                    id: +subscriptionId,
                },
                select: {
                    subscriptionType: true,
                    price: true,
                    description: true,
                    id: true,
                    paymentProvider: true,
                },
            });

            if (!subscription) {
                throw new Error('Subscription not found');
            }

            if (subscription.paymentProvider && subscription.paymentProvider !== provider) {
                throw new ApiError({
                    status: 400,
                    message: 'Subscription already has a payment provider',
                    i18n: 'error.subscription.paymentProvider',
                });
            }

            const service: PaylineService = services[provider];

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const customer = await service.getCustomer(req.user);

            // const ngrok = require('ngrok');

            if (process.env.NODE_ENV !== 'production') configuration.BACKEND_URL = `${await ngrok.connect(3333)}/api`;

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const paymentIntent = await service.createPaymentIntent(
                {
                    paymentType:
                        subscription.subscriptionType === 'SUBSCRIPTION'
                            ? PaymentType.SUBSCRIPTION
                            : PaymentType.ONETIME,
                    subscription: subscription as any,
                    userSubscriptionId: uuid(),
                    clientId: customer?.id,
                    amount: subscription.price,
                    description: subscription.description,
                    currency: 'EUR',
                },
                {
                    cancelUrl: configuration.BACKEND_URL + '/payment/status',
                    statusUrl: configuration.BACKEND_URL + `/payment/webhook/${provider}`,
                    successUrl: configuration.BACKEND_URL + `/payment/webhook/${provider}`,
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
                    price: subscription.price,
                    customerId: customer.id,
                    paymentProdvider: provider as string,
                },
            });

            if (provider === 'payline')
                res.json({
                    token: paymentIntent.id,
                });
            else
                res.json({
                    url: (paymentIntent as Payment).getCheckoutUrl(),
                });
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
            const { id } = req.params;
            const { user } = req;
            const payment = await prisma.userSubscription.findFirst({
                where: {
                    id: +id,
                    userId: +user.id,
                    status: 'active',
                },
            });
            if (!payment) {
                throw new Error('Payment not found');
            }

            const service: PaymentService = services[payment.paymentProdvider];

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
                customerId: true,
                extSubscriptionId: true,
                lastPaymentDate: true,
            },
        });

        if (!subscription) {
            return res.sendStatus(200);
        }

        if (status.status === 'canceled' || status.status === 'failed' || status.status === 'expired') {
            let validUntil;
            if (subscription.lastPaymentDate)
                validUntil = new Date(
                    subscription.lastPaymentDate.getTime() +
                        subscription.Subscription.refreshRate * 24 * 60 * 60 * 1000,
                );
            else validUntil = new Date();
            await prisma.userSubscription.update({
                where: {
                    id: subscription.id,
                },
                data: {
                    status: status.status,
                },
            });

            if (status.status === 'canceled') {
                await prisma.userSubscription.update({
                    where: {
                        id: subscription.id,
                    },
                    data: {
                        status: status.status,
                        endDate: validUntil,
                    },
                });
                await AWSsendEmail({
                    email: subscription.User.email,
                    subject: '6FIRE - Annulation de votre commande',
                    htmlMessage: generateOrderCancelledEmail({
                        name: subscription.User.firstName,
                        date: validUntil.toLocaleDateString(),
                    }),
                });
                return;
            } else if (status.status === 'failed')
                await AWSsendEmail({
                    email: subscription.User.email,
                    subject: '6FIRE - Erreur de paiement',
                    htmlMessage: generateOrderFailedEmail({
                        name: subscription.User.firstName,
                        until_retry: subscription.Subscription.refreshRate.toLocaleString(),
                    }),
                });
            else if (status.status === 'expired')
                await AWSsendEmail({
                    email: subscription.User.email,
                    subject: '6FIRE - Votre paiement a expiré',
                    htmlMessage: generateOrderCancelledEmail({
                        name: subscription.User.firstName,
                        date: new Date(subscription.createdAt).toLocaleDateString(),
                    }),
                });
        } else if (status.status === 'paid') {
            await prisma.userSubscription.update({
                where: {
                    id: subscription.id,
                },
                data: {
                    status: 'active',
                    lastPaymentDate: new Date(),
                },
            });
            if (subscription.Subscription.subscriptionType === 'SUBSCRIPTION' && !subscription.extSubscriptionId) {
                console.log('subscription');
                await MollieService.createSubscription(
                    subscription.id,
                    subscription.customerId,
                    subscription.Subscription as any,
                );
                console.log('subscription created');
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
            } else if (subscription.Subscription.subscriptionType !== 'SUBSCRIPTION') {
                console.log('subscription already created');
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

            res.sendStatus(200);
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
