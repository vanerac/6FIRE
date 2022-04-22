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

// webhooks
router.post('/webhooks/status', PaymentController.webhooksStatus);

export default router;
