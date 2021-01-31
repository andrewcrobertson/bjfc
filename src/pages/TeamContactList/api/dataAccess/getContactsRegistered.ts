import type { Database } from 'better-sqlite3';

const sql = `SELECT pcr.footyWebNumber,
  pcr.gender,
  pcr.phoneHome,
  pcr.phoneWork,
  pcr.phoneMobile,
  pcr.email1,
  pcr.email2,
  pcr.assistInRole1,
  pcr.assistInRole2,
  pcr.assistInRole3
FROM playerContactRegistered pcr
INNER JOIN player p ON p.footyWebNumber = pcr.footyWebNumber
WHERE p.teamCode = @code
ORDER BY pcr.sequence;`;

export interface IContactRegisteredDb {
  footyWebNumber: string;
  gender: string;
  phoneHome: string;
  phoneWork: string;
  phoneMobile: string;
  email1: string;
  email2: string;
  assistInRole1: string;
  assistInRole2: string;
  assistInRole3: string;
}

export const getContactsRegistered = (db: Database, code: string): IContactRegisteredDb[] => {
  return db.prepare(sql).all({ code });
};
