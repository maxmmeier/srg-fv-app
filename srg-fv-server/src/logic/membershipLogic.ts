import mysql, { PoolOptions, RowDataPacket } from 'mysql2';
import { applyMembershipOptions } from '../../../srg-fv-contract/applyOptions';

export async function addMembership(options: applyMembershipOptions) {
  const access: PoolOptions = {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_SCHEMA,
    timezone: '+00:00',
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

  await connection.execute(sql, values);
}

export async function getMembership() {}

export async function getMemberships() {}

interface membership extends RowDataPacket {
  id: number;
  lastName: string;
  firstName: string;
  email: string;
  dateOfBirth: string;
  street: string;
  zip: string;
  city: string;
  memberSignature: string;
  isMemberNotAccountHolder: boolean;
  lastNameSepa: string | undefined;
  firstNameSepa: string | undefined;
  streetSepa: string | undefined;
  zipSepa: string | undefined;
  citySepa: string | undefined;
  bank: string;
  bic: string;
  iban: string;
  mandate: string;
  sepaSignature: string;
}
