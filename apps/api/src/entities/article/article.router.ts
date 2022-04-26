import { Router } from 'express';
import ArticleController from './article.controller';
import { isAdmin } from '../../tools/auth.tools';
import multer from 'multer';
import configuration from '../../../configuration';
import { v4 as uuid } from 'uuid';

const router = Router();

const upload = multer({
    dest: configuration.UPLOAD_DIR,
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, configuration.UPLOAD_DIR);
        },
        filename: (req, file, cb) => {
            console.log(file.originalname);
            cb(null, `${uuid()}-${file.originalname}`);
        },
    }),
});

router.get('/', ArticleController.getAll);
router.post(
    '/',
    upload.fields([
        { name: 'banner', maxCount: 1 },
        {
            name: 'header',
            maxCount: 1,
        },
    ]),
    isAdmin,
    ArticleController.create,
);
router.get('/:id', ArticleController.getById);
router.put('/:id', isAdmin, ArticleController.update);
router.delete('/:id', isAdmin, ArticleController.delete);

export default router;
