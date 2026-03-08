import { Router } from 'express';
import { createMembershipPlanController, getMembershipPlansController } from '../controllers/membershipPlan.controllers';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getMembershipPlansController);
router.post('/', authMiddleware, createMembershipPlanController);

export default router;
