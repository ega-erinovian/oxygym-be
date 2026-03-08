import { Router } from 'express';
import { createMembershipPlanController, getMembershipPlanController, getMembershipPlansController } from '../controllers/membershipPlan.controllers';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getMembershipPlansController);
router.get('/:id', authMiddleware, getMembershipPlanController);
router.post('/', authMiddleware, createMembershipPlanController);

export default router;
