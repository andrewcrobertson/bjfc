import type { Database } from 'better-sqlite3';

const sql = `SELECT relationship,
  name,
  gender,
  phone1,
  phone2
FROM playerContactEmergency
WHERE footyWebNumber = @footyWebNumber
ORDER BY sequence;`;

export interface IContactEmergencyDb {
  relationship: string;
  name: string;
  gender: string;
  phone1: string;
  phone2: string;
}

export const getContactsEmergency = (db: Database, footyWebNumber: string): IContactEmergencyDb[] => {
  return db.prepare(sql).all({ footyWebNumber });
};
