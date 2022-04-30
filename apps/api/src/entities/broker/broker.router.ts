import { Router } from 'express';
import BrokerController from './broker.controller';
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

router.get('/', BrokerController.getAll);
router.get('/:id', BrokerController.getOne);
router.post('/', upload.fields([{ name: 'image', maxCount: 1 }]), isAdmin, BrokerController.create);
router.put('/:id', isAdmin, BrokerController.update);
router.delete('/:id', isAdmin, BrokerController.delete);

export default router;
