import { Request, Response, NextFunction } from 'express';
import { applyMembershipOptions } from '../../../srg-fv-contract/applyOptions';
import mysql, { PoolOptions } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

export const applyMembership = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const options = req.body as applyMembershipOptions;

    const access: PoolOptions = {
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_SCHEMA,
    };

    const connection = mysql.createPool(access);

    const sql = `insert into membership 
      (lastName,
      firstName,
      email,
      dateOfBirth,
      street,
      zip,
      city,
      memberSignature,
      isMemberNotAccountHolder,
      lastNameSepa,
      firstNameSepa,
      streetSepa,
      zipSepa,
      citySepa,
      bank, 
      bic, 
      iban, 
      mandate, 
      sepaSignature) 
      VALUES 
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      options.lastName,
      options.firstName,
      options.email,
      options.dateOfBirth,
      options.street,
      options.zip,
      options.city,
      options.memberSignature,
      options.isMemberNotAccountHolder,
      options.lastNameSepa,
      options.firstNameSepa,
      options.streetSepa,
      options.zipSepa,
      options.citySepa,
      options.bank,
      options.bic,
      options.iban,
      options.mandate,
      options.sepaSignature,
    ];

    connection.execute(sql, values, (err, result) => {
      console.log(err);
      console.log(result);
    });

    res.status(201).json();
  } catch (error) {
    next(error);
  }
};
