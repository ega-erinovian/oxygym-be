import { Router } from 'express';
import { createMembershipPlanController } from '../controllers/membershipPlan.controllers';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.post('/', authMiddleware, createMembershipPlanController);

export default router;
