import type { PlayerStatusEnum } from '@this/utility/constants/enums';
import type { Database } from 'better-sqlite3';

const sql = `SELECT footyWebNumber,
  lastName,
  firstName,
  dateOfBirth,
  gender,
  status,
  yearLastRegistered,
  yearLastTransferred,
  club
FROM player
WHERE status IN ('Insured', 'Registered', 'Recent');`;

export interface IPlayerDb {
  footyWebNumber: string;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  gender: string;
  status: PlayerStatusEnum;
  yearLastRegistered: number;
  yearLastTransferred: number;
  club: string;
}

export const getPlayers = (db: Database, month: number): IPlayerDb[] => db.prepare(sql).all({ month });
