import { Router } from 'express';
import SubscriptionController from './subscription.controller';

const router = Router();

router.get('/', SubscriptionController.getAll);
router.post('/', SubscriptionController.create);
router.get('/:id', SubscriptionController.getById);
router.put('/:id', SubscriptionController.update);
router.delete('/:id', SubscriptionController.delete);

export default router;
