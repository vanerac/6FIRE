import { Router } from 'express';
import ThemeController from './theme.controller';
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

router.get('/', ThemeController.getAll);
router.get('/:id', ThemeController.getOne); // filtered data
router.post('/', upload.single('icon'), isAdmin, ThemeController.create);
router.put('/:id', isAdmin, ThemeController.update);
router.delete('/:id', isAdmin, ThemeController.delete);

export default router;
