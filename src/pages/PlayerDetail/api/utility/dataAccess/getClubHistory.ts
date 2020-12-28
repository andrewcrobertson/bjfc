import type { Database } from 'better-sqlite3';

const sql = `SELECT club,
  date
FROM playerClubHistory
WHERE footyWebNumber = @footyWebNumber
ORDER BY date DESC;`;

export interface IClubHistoryDb {
  club: string;
  date: string;
}

export const getClubHistory = (db: Database, footyWebNumber: string): IClubHistoryDb[] => db.prepare(sql).all({ footyWebNumber });
