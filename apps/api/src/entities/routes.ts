import { Router } from 'express';
import UserRouter from './user/user.router';
import { isAdmin, verifyToken } from '../tools/auth.tools';
import AuthRouter from './auth/auth.router';
import ThemeRouter from './theme/theme.router';
import CryptoRouter from './crypto/crypto.router';
import ArticleRouter from './article/article.router';
import TraderRouter from './trader/trader.router';
import SubscriptionRouter from './subscription/subscription.router';
import PaymentRouter from './payment/payment.router';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/user', [verifyToken, isAdmin], UserRouter);
router.use('/theme', verifyToken, ThemeRouter);
router.use('/crypto', verifyToken, CryptoRouter);
router.use('/trader', verifyToken, TraderRouter);
router.use('/article', verifyToken, ArticleRouter);
router.use('/subscription', verifyToken, SubscriptionRouter);
router.use('/payment', verifyToken, PaymentRouter);

export default router;
