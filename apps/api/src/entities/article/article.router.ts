import { Router } from 'express';
import ArticleController from './article.controller';
import { isAdmin } from '../../tools/auth.tools';

const router = Router();

router.get('/', ArticleController.getAll);
router.post('/', isAdmin, ArticleController.create);
router.get('/:id', ArticleController.getById);
router.put('/:id', isAdmin, ArticleController.update);
router.delete('/:id', isAdmin, ArticleController.delete);
router.get('/theme/:id', ArticleController.getByTheme);

export default router;
