import { Router } from 'express';
import AdminController from './admin.controller';
import { isAdmin, verifyToken } from '../../tools/auth.tools';

const router = Router();

router.put('/config/sms', [verifyToken, isAdmin], AdminController.smsToggle);
router.get('/reset', AdminController.resetPassword);
router.post('/setUserPassword', [verifyToken, isAdmin], AdminController.setUserPassword);
router.get('/isAdmin', verifyToken, AdminController.isAdmin);

export default router;
