import { Router } from 'express';
import ThemeController from './theme.controller';

const router = Router();

router.get('/', ThemeController.getAll);
router.get('/:id', ThemeController.getOne);
router.post('/', ThemeController.create);
router.put('/:id', ThemeController.update);
router.delete('/:id', ThemeController.delete);

export default router;
