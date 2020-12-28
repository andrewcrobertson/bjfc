import type { Database } from 'better-sqlite3';

const sql = `SELECT footyWebNumber,
  relationship,
  name,
  gender,
  phone1,
  phone2
FROM playerContactEmergency
WHERE footyWebNumber = @code;`;

export interface IContactEmergencyDb {
  footyWebNumber: string;
  relationship: string;
  name: string;
  gender: string;
  phone1: string;
  phone2: string;
}

export const getContactsEmergency = (db: Database, footyWebNumber: string): IContactEmergencyDb[] => {
  return db.prepare(sql).all({ code: footyWebNumber });
};
