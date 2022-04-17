import { Router } from 'express';
import AuthController from './auth.controller';
import { verifyToken } from '../../tools/auth.tools';

const router = Router();

router.post('/login', AuthController.login);
router.get('/verify', verifyToken, AuthController.verify);
router.get('/verify/new', AuthController.verifyNew);
router.post('/register', AuthController.register);
router.get('/logout', verifyToken, AuthController.logout);

export default router;
