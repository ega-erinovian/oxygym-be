import { NextFunction, Request, Response } from 'express';
import { createMembershipPlanService } from '../services/membership-plan/create-plan.service';
import { getMembershipPlansService } from '../services/membership-plan/get-membership-plans.service';
import { getMembershipPlanService } from '../services/membership-plan/get-membership-plan.service';

export const getMembershipPlansController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const query = {
      search: (req.query.search as string) || '',
      duration: parseInt(req.query.duration as string) || 0,
      price: parseInt(req.query.price as string) || 0,
    };

    const result = await getMembershipPlansService(query);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getMembershipPlanController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await getMembershipPlanService(String(id));
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

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
