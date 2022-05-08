import { ApiError, CRUDController } from '../../types';
import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AWSsendEmail } from '../../tools/notifications.tools';
import {
    generateConfirmationEmail,
    generateOrderCancelledEmail,
    generateOrderFailedEmail,
} from '../../templates/email';
import PaylineService from '../../tools/payment/payline.service';
import { PaymentService, PaymentType } from '../../tools/payment/payment.service';
import configuration from '../../../configuration';

import { v4 as uuid } from 'uuid';

import { Payment } from '@mollie/api-client';
import StripeService, { stripe } from '../../tools/payment/stripe.service';

const prisma = new PrismaClient();
// const paylineWebService = new PaylineWeb(paylineConfig);

const services = {
    // mollie: MollieService,
    payline: PaylineService,
    stripe: StripeService,
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

            const existingSubscription = await prisma.userSubscription.findFirst({
                where: {
                    userId: +req.user.id,
                    status: {
                        in: ['active', 'pending'],
                    },
                },
                select: {
                    Subscription: true,
                },
            });

            if (existingSubscription) {
                throw new ApiError({
                    status: 409,
                    message: 'Subscription already exists',
                    i18n: 'error.subscription.alreadyExists',
                });
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
            console.log(paymentIntent);

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

    // static async mollieWebhooksStatus(req: Request, res: Response) {
    //     const { id } = req.body;
    //
    //     const status = await MollieService.getPayment(id);
    //
    //     if (!status) {
    //         return res.sendStatus(200);
    //     }
    //
    //     const subscription = await prisma.userSubscription.findFirst({
    //         where: {
    //             paymentId: id,
    //         },
    //         select: {
    //             Subscription: true,
    //             User: true,
    //             id: true,
    //             createdAt: true,
    //             updatedAt: true,
    //             price: true,
    //             customerId: true,
    //             extSubscriptionId: true,
    //             lastPaymentDate: true,
    //         },
    //     });
    //
    //     if (!subscription) {
    //         return res.sendStatus(200);
    //     }
    //
    //     let formattedStatus;
    //     if (status.status === 'paid') {
    //         formattedStatus = 'active';
    //     } else if (status.status === 'canceled') {
    //         formattedStatus = 'canceled';
    //     } else if (status.status === 'expired') {
    //         formattedStatus = 'expired';
    //     } else if (status.status === 'failed') {
    //         formattedStatus = 'failed';
    //     } else {
    //         formattedStatus = 'pending';
    //     }
    //
    //     await PaymentController.handleSubscriptionUpdate(subscription.id, formattedStatus);
    //
    //     res.sendStatus(200);
    // }

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

    // static redirectMollie(req: Request, res: Response) {
    //     res.redirect('https://6fireinvest.com/articlesPage');
    // }

    static async stripeWebhooksStatus(req: Request, res: Response, next: NextFunction) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        let event = req.body;
        // Replace this endpoint secret with your endpoint's unique secret
        // If you are testing with the CLI, find the secret by running 'stripe listen'
        // If you are using an endpoint defined with the API or dashboard, look in your webhook settings
        // at https://dashboard.stripe.com/webhooks

        const webhook = await prisma.config.findFirst({
            where: {
                key: 'stripe_webhook_secret',
            },
        });
        const endpointSecret = webhook.value;

        // Only verify the event if you have an endpoint secret defined.
        // Otherwise use the basic event deserialized with JSON.parse
        if (endpointSecret) {
            // Get the signature sent by Stripe
            const signature = req.headers['stripe-signature'];

            try {
                event = stripe.webhooks.constructEvent(req.body, signature, endpointSecret);
            } catch (err) {
                console.log('⚠️  Webhook signature verification failed.', err.message);
                return res.sendStatus(400);
            }
        }

        console.log(event);

        const paymentId = event.data.object.id;

        const userSubscription = await prisma.userSubscription.findFirst({
            where: {
                paymentId,
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

        if (!userSubscription) {
            return res.sendStatus(400);
        }

        // 'checkout.session.completed',
        //     'checkout.session.async_payment_succeeded',
        //     'checkout.session.async_payment_failed',
        //     'customer.subscription.deleted',
        //     'customer.subscription.updated',
        //     'customer.subscription.created',

        if (event.data.object.payment_status === 'paid') {
            if (event.type === 'checkout.session.completed') {
                if (event.data.object.mode === 'subscription') {
                    await PaymentController.handleSubscriptionUpdate(
                        userSubscription.id,
                        'subscription',
                        event.data.object.subscription,
                    );
                } else if (event.data.object.mode === 'payment') {
                    await PaymentController.handleSubscriptionUpdate(
                        userSubscription.id,
                        'payment',
                        event.data.object.payment_intent,
                    );
                } else {
                    console.warn('Unknown mode:', event.data.object.mode);
                    // Tf did you pay ??
                }
            }
        } else if (event.data.object.payment_status === 'failed') {
            await PaymentController.handleSubscriptionUpdate(
                userSubscription.id,
                'failed',
                event.data.object.payment_intent,
            );
        } else if (event.data.object.payment_status === 'canceled') {
            // Todo: does this mean revoked? or timedout?
            await PaymentController.handleSubscriptionUpdate(
                userSubscription.id,
                'canceled',
                event.data.object.payment_intent,
            );
        } else {
            console.log('Unknown payment status:', event.data.object.payment_status, event.data.object.id);
            await prisma.userSubscription.update({
                where: {
                    id: userSubscription.id,
                },
                data: {
                    paymentId: event.data.object.id,
                    status: event.data.object.payment_status,
                },
            });
        }

        res.send();
    }

    static async redirectStripe(req: Request, res: Response) {
        // Todo: on success stripe
        res.redirect('https://6fireinvest.com/accueil');
    }

    private static async handleSubscriptionUpdate(
        userSubscriptionId: number,
        status: 'active' | 'subscription' | 'payment' | 'canceled' | 'expired' | 'pending' | 'refunded' | 'failed',
        externalSubscriptionId?: string,
    ) {
        const userSubscription = await prisma.userSubscription.findFirst({
            where: {
                id: userSubscriptionId,
            },
            select: {
                id: true,
                status: true,
                User: true,
                Subscription: true,
                price: true,
                lastPaymentDate: true,
                extSubscriptionId: true,
                customerId: true,
                createdAt: true,
            },
        });

        let validUntil;
        if (userSubscription.lastPaymentDate)
            validUntil = new Date(
                userSubscription.lastPaymentDate.getTime() +
                    userSubscription.Subscription.refreshRate * 24 * 60 * 60 * 1000,
            );
        else validUntil = new Date();

        if (status === 'subscription') {
            if (userSubscription.extSubscriptionId === externalSubscriptionId) return;
            await prisma.userSubscription.update({
                where: {
                    id: userSubscription.id,
                },
                data: {
                    extSubscriptionId: externalSubscriptionId,
                },
            });
            await AWSsendEmail({
                email: userSubscription.User.email,
                subject: '6FIRE - Confirmation commande',
                htmlMessage: generateConfirmationEmail({
                    name: userSubscription.User.firstName,
                    price: userSubscription.price.toString(), // format might not be right
                    refresh: userSubscription.Subscription.refreshRate.toString(), // Format might not be right
                    subscription: userSubscription.Subscription.name,
                    orderDate: new Date(userSubscription.createdAt).toLocaleDateString(), // format might not be right
                    email: userSubscription.User.email,
                }),
            });
            status = 'active';
        } else if (status === 'payment') {
            // } else if (userSubscription.Subscription.subscriptionType !== 'SUBSCRIPTION') {
            console.log('subscription already created');
            await AWSsendEmail({
                email: userSubscription.User.email,
                subject: '6FIRE - Confirmation commande',
                htmlMessage: generateConfirmationEmail({
                    name: userSubscription.User.firstName,
                    price: userSubscription.price.toString(), // format might not be right
                    refresh: userSubscription.Subscription.refreshRate.toString(), // Format might not be right
                    subscription: userSubscription.Subscription.name,
                    orderDate: new Date(userSubscription.createdAt).toLocaleDateString(), // format might not be right
                    email: userSubscription.User.email,
                }),
            });
            status = 'active';
            // }
        } else if (status === 'canceled') {
            await prisma.userSubscription.update({
                where: {
                    id: userSubscription.id,
                },
                data: {
                    endDate: validUntil,
                },
            });
            await AWSsendEmail({
                email: userSubscription.User.email,
                subject: '6FIRE - Annulation de votre commande',
                htmlMessage: generateOrderCancelledEmail({
                    name: userSubscription.User.firstName,
                    date: validUntil.toLocaleDateString(),
                }),
            });
            return;
        } else if (status === 'failed')
            await AWSsendEmail({
                email: userSubscription.User.email,
                subject: '6FIRE - Erreur de paiement',
                htmlMessage: generateOrderFailedEmail({
                    name: userSubscription.User.firstName,
                    until_retry: userSubscription.Subscription.refreshRate.toLocaleString(),
                }),
            });

        // Final state saving
        await prisma.userSubscription.update({
            where: {
                id: userSubscription.id,
            },
            data: {
                status: status,
            },
        });
    }
}
