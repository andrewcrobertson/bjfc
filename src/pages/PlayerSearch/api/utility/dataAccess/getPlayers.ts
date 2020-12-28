import type { PlayerStatusEnum } from '@this/constants/enums';
import type { Database } from 'better-sqlite3';

const sql = `SELECT footyWebNumber,
  lastName,
  firstName,
  gender,
  status,
  yearLastRegistered,
  yearLastTransferred,
  club
FROM player;`;

export interface IPlayerDb {
  footyWebNumber: string;
  lastName: string;
  firstName: string;
  gender: string;
  status: PlayerStatusEnum;
  yearLastRegistered: number;
  yearLastTransferred: number;
  club: string;
}

export const getPlayers = (db: Database): IPlayerDb[] => db.prepare(sql).all();
