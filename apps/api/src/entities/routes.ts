import { NextFunction, Request, Response, Router } from 'express';
import { isAdmin, parseAdmin, parseToken, verifyToken } from '../tools/auth.tools';
import UserRouter from './user/user.router';
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
import AdminRouter from './admin/admin.router';
import configuration from '../../configuration';
import multer from 'multer';

import { v4 as uuid } from 'uuid';
import path from 'path';

const upload = multer({
    dest: configuration.UPLOAD_DIR,
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            console.log(file);
            cb(null, configuration.UPLOAD_DIR);
        },
        filename: (req, file, cb) => {
            console.log(file.originalname);
            cb(null, `${uuid()}-${file.originalname}`);
        },
    }),
});

const router = Router();

router.use('/auth', parseAdmin, AuthRouter);
router.use('/user', verifyToken, parseAdmin, UserRouter);
router.use('/theme', verifyToken, parseAdmin, ThemeRouter);
router.use('/crypto', verifyToken, parseAdmin, CryptoRouter);
router.use('/trader', verifyToken, parseAdmin, TraderRouter);
router.use('/article', verifyToken, parseAdmin, ArticleRouter);
router.use('/subscription', verifyToken, parseAdmin, SubscriptionRouter);
router.use('/payment', verifyToken, parseAdmin, PaymentRouter);
router.use('/affliation', verifyToken, parseAdmin, AffiliationRouter);
router.use('/offer', verifyToken, parseAdmin, OfferRouter);
router.use('/broker', verifyToken, parseAdmin, BrokerRouter);
router.use('/admin', parseToken, parseAdmin, AdminRouter);

//https://blog.logrocket.com/multer-nodejs-express-upload-file/
router.post(
    '/upload',
    verifyToken,
    isAdmin,
    upload.single('file'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('files', req.file);
            if (!req.file) {
                res.status(400).send('No file uploaded.');
                return;
            }

            const fileUrl = new URL(path.join('public/', req.file.filename), configuration.BACKEND_URL);
            console.log(fileUrl);

            res.status(200).json({
                message: 'File uploaded !',
                url: fileUrl.href,
            });
        } catch (error) {
            next(error);
        }
    },
);

export default router;
