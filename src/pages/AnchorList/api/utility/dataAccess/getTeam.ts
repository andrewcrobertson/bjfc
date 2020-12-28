import type { Database } from 'better-sqlite3';

const sql = `SELECT code FROM team ORDER BY code;`;

export interface ITeamDb {
  code: string;
}

export const getTeam = (db: Database): ITeamDb[] => db.prepare(sql).all();
