// payment webhooks router
// --------------------------------------------------------------
// get status on payment
// get status on subscription
// --------------------------------------------------------------
// Crud payments

import { Router } from 'express';
import PaymentController from './payment.controller';
import { isAdmin } from '../../tools/auth.tools';

const router = Router();

router.get('/', isAdmin, PaymentController.getAll);
router.get('/:id', isAdmin, PaymentController.getOne);
router.post('/', PaymentController.create);
router.put('/:id', isAdmin, PaymentController.update);
router.delete('/:id', PaymentController.delete);

router.get('/payment/:id', isAdmin, PaymentController.getByPaymentId);
router.post('/refund/:id', isAdmin, PaymentController.createRefund);

// webhooks
router.post('/webhook/mollie', PaymentController.mollieWebhooksStatus);
router.post('/webhook/payline', PaymentController.paylineWebhooksStatus);

export default router;
