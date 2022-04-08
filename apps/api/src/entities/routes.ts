import { Router } from 'express';
import UserRouter from './user/user.router';
import { verifyToken } from '../tools/auth.tools';
import AuthRouter from './auth/auth.router';
import ThemeRouter from './theme/theme.router';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/users', verifyToken, UserRouter);
router.use('/theme', verifyToken, ThemeRouter);

export default router;
