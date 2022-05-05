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

        let formattedStatus;
        if (status.status === 'paid') {
            formattedStatus = 'active';
        } else if (status.status === 'canceled') {
            formattedStatus = 'canceled';
        } else if (status.status === 'expired') {
            formattedStatus = 'expired';
        } else if (status.status === 'failed') {
            formattedStatus = 'failed';
        } else {
            formattedStatus = 'pending';
        }

        await PaymentController.handleSubscriptionUpdate(subscription.id, formattedStatus);

        res.sendStatus(200);
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
        res.redirect('https://6fireinvest.com/articlesPage');
    }

    static async stripeWebhooksStatus(req: Request, res: Response, next: NextFunction) {
        // let event = request.body;
        // // Replace this endpoint secret with your endpoint's unique secret
        // // If you are testing with the CLI, find the secret by running 'stripe listen'
        // // If you are using an endpoint defined with the API or dashboard, look in your webhook settings
        // // at https://dashboard.stripe.com/webhooks
        // const endpointSecret = 'whsec_12345';
        // // Only verify the event if you have an endpoint secret defined.
        // // Otherwise use the basic event deserialized with JSON.parse
        // if (endpointSecret) {
        //     // Get the signature sent by Stripe
        //     const signature = request.headers['stripe-signature'];
        //     try {
        //         event = stripe.webhooks.constructEvent(request.body, signature, endpointSecret);
        //     } catch (err) {
        //         console.log('⚠️  Webhook signature verification failed.', err.message);
        //         return response.sendStatus(400);
        //     }
        // }
        // let subscription;
        // let status;
        // // Handle the event
        // switch (event.type) {
        //     case 'customer.subscription.trial_will_end':
        //         subscription = event.data.object;
        //         status = subscription.status;
        //         console.log(`Subscription status is ${status}.`);
        //         // Then define and call a method to handle the subscription trial ending.
        //         // handleSubscriptionTrialEnding(subscription);
        //         break;
        //     case 'customer.subscription.deleted':
        //         subscription = event.data.object;
        //         status = subscription.status;
        //         console.log(`Subscription status is ${status}.`);
        //         // Then define and call a method to handle the subscription deleted.
        //         // handleSubscriptionDeleted(subscriptionDeleted);
        //         break;
        //     case 'customer.subscription.created':
        //         subscription = event.data.object;
        //         status = subscription.status;
        //         console.log(`Subscription status is ${status}.`);
        //         // Then define and call a method to handle the subscription created.
        //         // handleSubscriptionCreated(subscription);
        //         break;
        //     case 'customer.subscription.updated':
        //         subscription = event.data.object;
        //         status = subscription.status;
        //         console.log(`Subscription status is ${status}.`);
        //         // Then define and call a method to handle the subscription update.
        //         // handleSubscriptionUpdated(subscription);
        //         break;
        //     default:
        //         // Unexpected event type
        //         console.log(`Unhandled event type ${event.type}.`);
        // }
        // // Return a 200 response to acknowledge receipt of the event
        // response.send();
    }

    static async redirectStripe(req: Request, res: Response, next: NextFunction) {
        // Todo: on success stripe
    }

    private static async handleSubscriptionUpdate(
        userSubscriptionId: number,
        status: 'open' | 'active' | 'canceled' | 'expired' | 'pending' | 'refunded' | 'failed',
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

        if (status === 'active') {
            if (
                userSubscription.Subscription.subscriptionType === 'SUBSCRIPTION' &&
                !userSubscription.extSubscriptionId
            ) {
                await prisma.userSubscription.update({
                    where: {
                        id: userSubscriptionId,
                    },
                    data: {
                        lastPaymentDate: new Date(),
                    },
                });
                console.log('subscription');
                await MollieService.createSubscription(
                    userSubscription.id,
                    userSubscription.customerId,
                    userSubscription.Subscription as any,
                );
                console.log('subscription created');
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
            } else if (userSubscription.Subscription.subscriptionType !== 'SUBSCRIPTION') {
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
            }
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
