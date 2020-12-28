import type { PlayerStatusEnum } from '@this/constants/enums';
import type { Database } from 'better-sqlite3';

const sql = `SELECT footyWebNumber,
  lastName,
  firstName,
  dateOfBirth,
  gender,
  status,
  yearLastRegistered,
  yearLastTransferred,
  club,
  teamCode
FROM player
WHERE footyWebNumber = @footyWebNumber;`;

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
  teamCode: string;
}

export const getPlayer = (db: Database, footyWebNumber: string): IPlayerDb => db.prepare(sql).get({ footyWebNumber });
