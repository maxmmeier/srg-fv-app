import { Request, Response, NextFunction } from 'express';

export const applyMembership = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // const { name } = req.body;

    res.status(201).json();
  } catch (error) {
    next(error);
  }
};
