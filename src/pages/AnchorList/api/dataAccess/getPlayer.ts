import type { Database } from 'better-sqlite3';

const sql = `SELECT footyWebNumber FROM player ORDER BY footyWebNumber;`;

export interface IPlayerDb {
  footyWebNumber: string;
}

export const getPlayer = (db: Database): IPlayerDb[] => db.prepare(sql).all();
