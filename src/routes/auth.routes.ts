import { Router } from 'express';
import {
  loginController,
  refreshTokenController,
  registerController,
} from '../controllers/auth.controllers';
import { authMiddleware } from '../middlewares/auth.middleware';
import { validateLogin, validateRegister } from '../validators/auth.validator';

const router = Router();

router.post('/register', validateRegister, registerController);
router.post('/login', validateLogin, loginController);
router.post('/refresh-token', authMiddleware, refreshTokenController);

export default router;
