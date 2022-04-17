import { Router } from 'express';
import SubscriptionController from './subscription.controller';
import { isAdmin } from '../../tools/auth.tools';

const router = Router();

router.get('/', SubscriptionController.getAll);
router.post('/', isAdmin, SubscriptionController.create);
router.get('/:id', SubscriptionController.getById);
router.put('/:id', isAdmin, SubscriptionController.update);
router.delete('/:id', isAdmin, SubscriptionController.delete);

export default router;
