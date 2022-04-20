// payment webhooks router
// --------------------------------------------------------------
// get status on payment
// get status on subscription
// --------------------------------------------------------------
// Crud payments

import { Router } from 'express';
import PaymentController from './payment.controller';

const router = Router();

router.get('/', PaymentController.getAll);
router.get('/:id', PaymentController.getOne);
router.post('/', PaymentController.create);
router.put('/:id', PaymentController.update);
router.delete('/:id', PaymentController.delete);
router.get('/payment/:id', PaymentController.getByPaymentId);

// webhooks
// router.post('/webhooks/status', PaymentController.webhooksStatus);
