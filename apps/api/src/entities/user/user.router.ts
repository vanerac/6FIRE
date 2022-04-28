import { Router } from 'express';
import { UserController } from './user.controller';
import { isAdmin } from '../../tools/auth.tools';

const router = Router();

router.get('/', isAdmin, UserController.getAll);
router.post('/', isAdmin, UserController.create);
router.get('/:id', isAdmin, UserController.getOne);
router.put('/:id', isAdmin, UserController.update);
router.delete('/:id', isAdmin, UserController.delete);

router.get('/me', UserController.me);

router.get('/:id/subscription', isAdmin, UserController.getSubscription);
router.put('/:id/subscription', isAdmin, UserController.setSubscription);
router.delete('/:id/subscription', isAdmin, UserController.removeSubscription);

export default router;
