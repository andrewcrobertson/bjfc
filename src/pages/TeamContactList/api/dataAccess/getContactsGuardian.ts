import type { Database } from 'better-sqlite3';

const sql = `SELECT pcg.footyWebNumber,
  pcg.lastName,
  pcg.firstName,
  pcg.gender,
  pcg.phone1,
  pcg.phone2,
  pcg.mobile,
  pcg.email,
  pcg.assistInRole
FROM playerContactGuardian pcg
INNER JOIN player p ON p.footyWebNumber = pcg.footyWebNumber
WHERE p.teamCode = @code
ORDER BY pcg.sequence;`;

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

export const getContactsGuardian = (db: Database, code: string): IContactGuardianDb[] => {
  return db.prepare(sql).all({ code });
};
