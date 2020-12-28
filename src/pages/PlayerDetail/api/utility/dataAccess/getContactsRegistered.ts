import type { Database } from 'better-sqlite3';

const sql = `SELECT gender,
  phoneHome,
  phoneWork,
  phoneMobile,
  email1,
  email2,
  assistInRole1,
  assistInRole2,
  assistInRole3
FROM playerContactRegistered
WHERE footyWebNumber = @footyWebNumber
ORDER BY sequence;`;

export interface IContactRegisteredDb {
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

export const getContactsRegistered = (db: Database, footyWebNumber: string): IContactRegisteredDb[] => {
  return db.prepare(sql).all({ footyWebNumber });
};
