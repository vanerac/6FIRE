import { Router } from 'express';
import CountryController from './country.controller';
import { isAdmin } from '../../tools/auth.tools';

const router = Router();

router.get('/', CountryController.getAll);
router.get('/:id', CountryController.getOne); // filtered data
router.post('/', isAdmin, CountryController.create);
router.put('/:id', isAdmin, CountryController.update);
router.delete('/:id', isAdmin, CountryController.delete);

export default router;
