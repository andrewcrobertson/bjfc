import type { Database } from 'better-sqlite3';

const sql = `SELECT role,
  firstName,
  lastName,
  gender,
  phone,
  email
FROM committee;`;

export interface IMemberDb {
  role: string;
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
  email: string;
}

export const getMembers = (db: Database): IMemberDb[] => db.prepare(sql).all();
