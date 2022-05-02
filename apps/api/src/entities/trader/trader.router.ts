import { Router } from 'express';
import TraderController from './trader.controller';
import { isAdmin } from '../../tools/auth.tools';

const router = Router();

router.get('/curation', isAdmin, TraderController.getCuration);
router.put('/curation', isAdmin, TraderController.setCuration);

router.get('/:id', isAdmin, TraderController.getById);
router.delete('/:id', isAdmin, TraderController.deleteTrader);
router.put('/:id', isAdmin, TraderController.updateTrader);
router.post('/', isAdmin, TraderController.createTrader);

router.post('/trader/:id/follow', TraderController.followTrader);
router.delete('/trader/:id/follow', TraderController.unfollowTrader);

router.get('/trader/following', isAdmin, TraderController.getFollowing);
router.get('/trader/:id/followers', isAdmin, TraderController.getFollowers);

export default router;
