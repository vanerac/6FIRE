import { Router } from 'express';
import UserRouter from './user/user.router';
import { verifyToken } from '../tools/auth.tools';
import AuthRouter from './auth/auth.router';

const router = Router();

router.use('/users', verifyToken, UserRouter);
router.use('/auth', AuthRouter);

export default router;
