import { Request, Response, NextFunction } from 'express';
import { applyMembershipOptions } from '../../../srg-fv-contract/applyOptions';

export const applyMembership = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const options = req.body as applyMembershipOptions;

    res.status(201).json();
  } catch (error) {
    next(error);
  }
};
