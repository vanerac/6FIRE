import { Router } from 'express';
import AffiliationController from './affiliation.controller';
import { isAdmin } from '../../tools/auth.tools';

const router = Router();

router.get('/', AffiliationController.getAll);
router.get('/:id', AffiliationController.getOne);
router.post('/', isAdmin, AffiliationController.create);
router.put('/:id', isAdmin, AffiliationController.update);
router.delete('/:id', isAdmin, AffiliationController.delete);

export default router;
