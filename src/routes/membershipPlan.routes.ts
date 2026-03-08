import { Router } from 'express';
import { createMembershipPlanController, deletePlanController, getMembershipPlanController, getMembershipPlansController, updatePlanController } from '../controllers/membershipPlan.controllers';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getMembershipPlansController);
router.get('/:id', authMiddleware, getMembershipPlanController);
router.post('/', authMiddleware, createMembershipPlanController);
router.put('/:id', authMiddleware, updatePlanController);
router.delete('/:id', authMiddleware, deletePlanController);

export default router;
