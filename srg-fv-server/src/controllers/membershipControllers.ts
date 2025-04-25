import { Request, Response, NextFunction } from 'express';
import { applyMembershipOptions } from '../../../srg-fv-contract/applyMembershipOptions';
import dotenv from 'dotenv';
import {
  addMembership as internalAddMemebership,
  getMemberships as internalGetMemberships,
} from '../logic/membershipLogic';

dotenv.config();

export async function applyMembership(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const options = req.body as applyMembershipOptions;

    await internalAddMemebership(options);

    res.status(201).json();
  } catch (error) {
    next(error);
  }
}

export async function getMemberships(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    var members = await internalGetMemberships();

    res.status(200).json(members);
  } catch (error) {
    next(error);
  }
}
