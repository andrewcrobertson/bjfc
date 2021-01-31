import type { Database } from 'better-sqlite3';

const sql = `SELECT pce.footyWebNumber,
  pce.relationship,
  pce.name,
  pce.phone1,
  pce.phone2
FROM playerContactEmergency pce
INNER JOIN player p ON p.footyWebNumber = pce.footyWebNumber
WHERE p.teamCode = @code
ORDER BY pce.sequence;`;

export interface IContactEmergencyDb {
  footyWebNumber: string;
  relationship: string;
  name: string;
  phone1: string;
  phone2: string;
}

export const getContactsEmergency = (db: Database, code: string): IContactEmergencyDb[] => {
  return db.prepare(sql).all({ code });
};
