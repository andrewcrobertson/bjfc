import type { PlayerStatusEnum } from '@this/scripts/constants/enums';
import type { Database } from 'better-sqlite3';

const sql = `SELECT footyWebNumber,
  lastName,
  firstName,
  dateOfBirth,
  status,
  teamCode,
  yearLastRegistered,
  yearLastTransferred,
  club,
  teamCode
  FROM player
WHERE teamCode = @code;`;

export interface IPlayerDb {
  footyWebNumber: string;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  status: PlayerStatusEnum;
  yearLastRegistered: number;
  yearLastTransferred: number;
  club: string;
  teamCode: string;
}

export const getPlayers = (db: Database, code: string): IPlayerDb[] => db.prepare(sql).all({ code });
