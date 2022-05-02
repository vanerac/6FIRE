import { Router } from 'express';
import ThemeController from './theme.controller';
import { isAdmin, parseAdmin } from '../../tools/auth.tools';

const router = Router();

router.get('/', parseAdmin, ThemeController.getAll);
router.get('/:id', parseAdmin, ThemeController.getOne); // filtered data
router.post('/', isAdmin, ThemeController.create);
router.put('/:id', isAdmin, ThemeController.update);
router.delete('/:id', isAdmin, ThemeController.delete);

export default router;
