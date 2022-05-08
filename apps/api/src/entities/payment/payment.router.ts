// payment webhooks router
// --------------------------------------------------------------
// get status on payment
// get status on subscription
// --------------------------------------------------------------
// Crud payments

import express, { Router } from 'express';
import PaymentController from './payment.controller';
import { isAdmin, parseAdmin, verifyToken } from '../../tools/auth.tools';

const router = Router();

router.get('/', verifyToken, parseAdmin, isAdmin, PaymentController.getAll);
router.get('/:id', verifyToken, parseAdmin, isAdmin, PaymentController.getOne);
router.post('/', verifyToken, PaymentController.create);
router.put('/:id', verifyToken, parseAdmin, isAdmin, PaymentController.update);
router.delete('/:id', verifyToken, parseAdmin, PaymentController.delete);

router.get('/payment/:id', verifyToken, parseAdmin, isAdmin, PaymentController.getByPaymentId);
router.post('/refund/:id', verifyToken, parseAdmin, isAdmin, PaymentController.createRefund);

// webhooks
// router.post('/webhook/mollie', PaymentController.mollieWebhooksStatus);
// router.get('/webhook/mollie', PaymentController.redirectMollie);
router.post('/webhook/stripe', express.raw({ type: 'application/json' }), PaymentController.stripeWebhooksStatus);
router.get('/webhook/stripe', PaymentController.redirectStripe);
router.post('/webhook/payline', PaymentController.paylineWebhooksStatus);

export default router;
