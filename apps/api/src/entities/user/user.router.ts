import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();

router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;
