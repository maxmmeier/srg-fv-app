import { Request, Response, NextFunction } from 'express';
import { applyMembershipOptions } from '../../../srg-fv-contract/applyOptions';
import dotenv from 'dotenv';
import { addMembership } from '../logic/membershipLogic';

dotenv.config();

export async function applyMembership(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const options = req.body as applyMembershipOptions;

    await addMembership(options);

    res.status(201).json();
  } catch (error) {
    next(error);
  }
}
