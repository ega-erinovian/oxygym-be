import { NextFunction, Request, Response } from 'express';
import { createMembershipPlanService } from '../services/membership-plan/createPlan.service';

export const createMembershipPlanController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await createMembershipPlanService(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};