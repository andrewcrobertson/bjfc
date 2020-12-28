import type { Database } from 'better-sqlite3';

const sql = `SELECT footyWebNumber,
  lastName,
  firstName
FROM playerContactGuardian
ORDER BY sequence;`;

export interface IGuardianDb {
  footyWebNumber: string;
  lastName: string;
  firstName: string;
}

export const getGuardians = (db: Database): IGuardianDb[] => {
  return db.prepare(sql).all();
};
