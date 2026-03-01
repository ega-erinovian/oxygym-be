import { NextFunction, Request, Response } from 'express';
import { registerService } from '../services/auth/register.service';
import { loginService } from '../services/auth/login.service';
import { refreshTokenService } from '../services/auth/refreshToken.service';

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

export const refreshTokenController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      throw new Error('Unauthorized');
    }
    const result = await refreshTokenService(userId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
