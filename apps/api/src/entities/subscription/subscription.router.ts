import { Router } from 'express';
import SubscriptionController from './subscription.controller';
import { isAdmin } from '../../tools/auth.tools';

const router = Router();

router.get('/', SubscriptionController.getAll);
router.get('/:id', SubscriptionController.getById);
router.post('/', isAdmin, SubscriptionController.create);
router.put('/:id', isAdmin, SubscriptionController.update);
router.delete('/:id', isAdmin, SubscriptionController.delete);

export default router;
