import { ApplyMembershipOptions } from '../../../srg-fv-contract/applyMembershipOptions';
import { GetMembershipPdfOptions } from '../../../srg-fv-contract/getMembershipPdfOptions';
import { MembershipPdf } from '../../../srg-fv-contract/membershipPdf';
import { getConnection } from './logicBase';
import { ShortMembership } from '../entities/shortmembership';
import { Membership } from '../entities/membership';
import { generateMembershipPdf } from '../helper/membershipPdfHelper';

export async function addMembership(options: ApplyMembershipOptions) {
  const connection = getConnection();

  const sql = `
    insert into membership 
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

export async function getMemberships(): Promise<ShortMembership[]> {
  const connection = getConnection();

  const sql = `
    SELECT id, lastName, firstName
    FROM membership
    ORDER BY lastName`;

  const [rows] = await connection.execute<ShortMembership[]>(sql, []);

  return rows;
}

export async function getPdf(
  options: GetMembershipPdfOptions,
): Promise<MembershipPdf> {
  const connection = getConnection();

  const sql = `
    SELECT *
    FROM membership
    WHERE id = ?`;

  const [rows] = await connection.execute<Membership[]>(sql, [options.id]);
  const membership = rows[0];

  return generateMembershipPdf(membership);
}
