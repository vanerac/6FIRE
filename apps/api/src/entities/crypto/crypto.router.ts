import { Router } from 'express';
import CryptoController from './crypto.controller';
import { isAdmin } from '../../tools/auth.tools';

const router = Router();

router.get('/', CryptoController.getAll);
router.get('/searchCoin', CryptoController.searchCoin);
router.get('/coinImg/:coin', CryptoController.getCoinImg);
router.get('/:coinId/value', CryptoController.getCoinValue);
router.put('/cryptos', isAdmin, CryptoController.setCryptos);
router.put('/message', isAdmin, CryptoController.setMessage);

export default router;
