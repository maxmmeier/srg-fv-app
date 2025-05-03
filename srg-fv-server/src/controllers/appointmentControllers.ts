import { Request, Response, NextFunction } from 'express';
import { AddAppointmentOptions } from '../../../srg-fv-contract/addAppointmentOptions';
import dotenv from 'dotenv';
import {
  addAppointment as internalAddAppointment,
  getAppointments as internalGetAppointments,
} from '../logic/appointmentLogic';

dotenv.config();

export async function addAppointment(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const options = req.body as AddAppointmentOptions;

    await internalAddAppointment(options);

    res.status(201).json();
  } catch (error) {
    next(error);
  }
}

export async function getAppointments(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    var appointments = await internalGetAppointments();

    res.status(200).json(appointments);
  } catch (error) {
    next(error);
  }
}
