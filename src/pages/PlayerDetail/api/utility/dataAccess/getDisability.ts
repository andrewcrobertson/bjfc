import type { Database } from 'better-sqlite3';

const sql = `SELECT type1,
  type2,
  note1,
  note2
FROM playerDisability
WHERE footyWebNumber = @code;`;

export interface IDisabilityDb {
  type1: string;
  type2: string;
  note1: string;
  note2: string;
}

export const getDisability = (db: Database, footyWebNumber: string): IDisabilityDb => db.prepare(sql).get({ footyWebNumber });
