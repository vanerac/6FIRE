import { Router } from 'express';
import TraderController from './trader.controller';

const router = Router();

router.get('/curation/top', TraderController.getTopTraders);
router.get('/trader/search', TraderController.searchTrader);

router.get('/curation', TraderController.getCuration);
router.put('/curation', TraderController.setCuration);

router.post('/trader/:id/follow', TraderController.followTrader);
router.delete('/trader/:id/follow', TraderController.unfollowTrader);

router.get('/trader/following', TraderController.getFollowing);
router.get('/trader/:id/followers', TraderController.getFollowers);

export default router;
