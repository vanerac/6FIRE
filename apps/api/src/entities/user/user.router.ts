import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();

router.get('/', UserController.getAll);
router.post('/', UserController.create);
router.get('/:id', UserController.getOne);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

router.get('/:id/subscription', UserController.getSubscription);
router.put('/:id/subscription', UserController.setSubscription);
router.delete('/:id/subscription', UserController.removeSubscription);

export default router;
