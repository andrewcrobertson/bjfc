import type { PlayerStatusEnum } from '@this/scripts/constants/enums';
import type { Database } from 'better-sqlite3';

const sql = `SELECT footyWebNumber,
  lastName,
  firstName,
  dateOfBirth,
  CAST(substr(dateOfBirth, 9, 2) AS INTEGER) dayOfBirth,
  gender,
  status,
  yearLastRegistered,
  yearLastTransferred,
  club
FROM player
WHERE status IN ('Insured', 'Registered', 'Recent')
  AND CAST(substr(dateOfBirth, 6, 2) AS INTEGER) = @month
ORDER BY CAST(substr(dateOfBirth, 9, 2) AS INTEGER),
  lastName,
  firstName;`;

export interface IPlayerDb {
  footyWebNumber: string;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  monthOfBirth: number;
  dayOfBirth: number;
  gender: string;
  status: PlayerStatusEnum;
  yearLastRegistered: number;
  yearLastTransferred: number;
  club: string;
}

export const getPlayers = (db: Database, month: number): IPlayerDb[] => db.prepare(sql).all({ month });
