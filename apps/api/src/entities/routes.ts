import { Router } from 'express';
import { verifyToken } from '../tools/auth.tools';
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

const $upload = multer({
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
router.use('/admin', AdminRouter);

//https://blog.logrocket.com/multer-nodejs-express-upload-file/
// router.post('/upload', upload.array('file'), (req: Request, res: Response, next: NextFunction) => {
//     try {
//         console.log('files', req.files);
//
//         res.status(200).json({
//             message: 'File uploaded !',
//             url: path.join(configuration.BACKEND_URL, 'public/', req.file?.filename ?? ''),
//         });
//     } catch (error) {
//         next(error);
//     }
// });

export default router;
