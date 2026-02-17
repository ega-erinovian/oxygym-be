import { NextFunction, Request, Response } from 'express';
import { registerService } from '../services/register.service';
import { loginService } from '../services/login.service';

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await registerService(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await loginService(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
