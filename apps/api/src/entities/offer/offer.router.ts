import { Router } from 'express';
import OfferController from './offer.controller';
import { isAdmin } from '../../tools/auth.tools';

const router = Router();

// Admin CRUD
router.get('/', isAdmin, OfferController.getAll);
router.get('/:id', isAdmin, OfferController.getOne);
router.post('/', isAdmin, OfferController.create);
router.put('/:id', isAdmin, OfferController.update);
router.delete('/:id', isAdmin, OfferController.delete);

// Usage Get
router.get('/usage', isAdmin, OfferController.getAllUsage);
router.get('/:id/usage', isAdmin, OfferController.getUsage);

export default router;
