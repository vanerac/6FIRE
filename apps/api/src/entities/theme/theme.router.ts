import { Router } from 'express';
import ThemeController from './theme.controller';
import { isAdmin } from '../../tools/auth.tools';

const router = Router();

router.get('/', ThemeController.getAll);
router.get('/:id', ThemeController.getOne); // filtered data
router.post('/', isAdmin, ThemeController.create);
router.put('/:id', isAdmin, ThemeController.update);
router.delete('/:id', isAdmin, ThemeController.delete);

export default router;
