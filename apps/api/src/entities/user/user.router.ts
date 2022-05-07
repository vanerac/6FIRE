import { Router } from 'express';
import { UserController } from './user.controller';
import { isAdmin } from '../../tools/auth.tools';

const router = Router();

router.get('/', isAdmin, UserController.getAll);
router.post('/', isAdmin, UserController.create);
router.get('/:id', isAdmin, UserController.getOne);
router.put('/:id', isAdmin, UserController.update);
router.delete('/:id', isAdmin, UserController.delete);

// router.get('/me', UserController.me);
router.get('/me/getLinkingCode', UserController.getLinkingCode);
router.get('/me/infos', UserController.getInfos);
router.put('/me/infos', UserController.updateInfos);
router.get('/me/subscription', UserController.getSubscriptions);

router.get('id/:id/subscription', isAdmin, UserController.getSubscription);
router.put('id/:id/subscription', isAdmin, UserController.setSubscription);
router.delete('id/:id/subscription', isAdmin, UserController.removeSubscription);

export default router;
