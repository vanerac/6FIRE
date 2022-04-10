import { Router } from 'express';
import CryptoController from './crypto.controller';

const router = Router();

router.get('/', CryptoController.getAll);
router.put('/cryptos', CryptoController.setCryptos);
router.put('/message', CryptoController.setMessage);

export default router;
