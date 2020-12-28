import type { PersonGenderEnum } from '@this/scripts/constants/enums';
import type { Database } from 'better-sqlite3';

const sql = `SELECT teamCode,
  role,
  lastName,
  firstName,
  gender,
  phone,
  email
FROM teamOfficial
WHERE teamCode = @code;`;

export interface IOfficialDb {
  teamCode: string;
  role: string;
  lastName: string;
  firstName: string;
  gender: PersonGenderEnum;
  phone: string;
  email: string;
}

export const getOfficials = (db: Database, code: string): IOfficialDb[] => db.prepare(sql).all({ code });
