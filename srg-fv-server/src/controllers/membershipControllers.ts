import { Request, Response, NextFunction } from 'express';
import { ApplyMembershipOptions } from '../../../srg-fv-contract/applyMembershipOptions';
import { GetMembershipPdfOptions } from '../../../srg-fv-contract/getMembershipPdfOptions';
import dotenv from 'dotenv';
import {
  addMembership as internalAddMemebership,
  getMemberships as internalGetMemberships,
  getPdf as internalGetPdf,
} from '../logic/membershipLogic';

dotenv.config();

export async function applyMembership(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const options = req.body as ApplyMembershipOptions;

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

export async function getPdf(req: Request, res: Response, next: NextFunction) {
  try {
    const options = req.body as GetMembershipPdfOptions;

    var pdf = await internalGetPdf(options);

    res.status(200).json(pdf);
  } catch (error) {
    next(error);
  }
}
