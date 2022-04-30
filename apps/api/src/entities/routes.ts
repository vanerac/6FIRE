import { Router } from 'express';
import UserRouter from './user/user.router';
import { verifyToken } from '../tools/auth.tools';
import AuthRouter from './auth/auth.router';
import ThemeRouter from './theme/theme.router';
import CryptoRouter from './crypto/crypto.router';
import ArticleRouter from './article/article.router';
import TraderRouter from './trader/trader.router';
import SubscriptionRouter from './subscription/subscription.router';
import PaymentRouter from './payment/payment.router';
import AffiliationRouter from './affiliation/affiliation.router';
import OfferRouter from './offer/offer.router';
import BrokerRouter from './broker/broker.router';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/user', verifyToken, UserRouter);
router.use('/theme', verifyToken, ThemeRouter);
router.use('/crypto', verifyToken, CryptoRouter);
router.use('/trader', verifyToken, TraderRouter);
router.use('/article', verifyToken, ArticleRouter);
router.use('/subscription', verifyToken, SubscriptionRouter);
router.use('/payment', verifyToken, PaymentRouter);
router.use('/affliation', verifyToken, AffiliationRouter);
router.use('/offer', verifyToken, OfferRouter);
router.use('/broker', verifyToken, BrokerRouter);

export default router;
