import { Router } from 'express';
import AdminController from './admin.controller';
import { isAdmin, verifyToken } from '../../tools/auth.tools';

const router = Router();

router.put('/config/sms', [verifyToken, isAdmin], AdminController.smsToggle);
router.get('/reset', AdminController.resetPassword);

export default router;
