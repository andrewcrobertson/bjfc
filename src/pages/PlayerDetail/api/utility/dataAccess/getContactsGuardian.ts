import type { Database } from 'better-sqlite3';

const sql = `SELECT footyWebNumber,
  lastName,
  firstName,
  gender,
  phone1,
  phone2,
  mobile,
  email,
  assistInRole
FROM playerContactGuardian
WHERE footyWebNumber = @code;`;

export interface IContactGuardianDb {
  footyWebNumber: string;
  lastName: string;
  firstName: string;
  gender: string;
  phone1: string;
  phone2: string;
  mobile: string;
  email: string;
  assistInRole: string;
}

export const getContactsGuardian = (db: Database, footyWebNumber: string): IContactGuardianDb[] => {
  return db.prepare(sql).all({ code: footyWebNumber });
};
