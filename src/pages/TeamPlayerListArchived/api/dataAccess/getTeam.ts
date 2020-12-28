import type { TeamGenderEnum } from '@this/scripts/constants/enums';
import type { Database } from 'better-sqlite3';

const sql = `SELECT code,
name,
topAge,
gender
FROM team
WHERE code = @code;`;

export interface ITeamDb {
  code: string;
  name: string;
  topAge: number;
  gender: TeamGenderEnum;
}

export const getTeam = (db: Database, code: string): ITeamDb => db.prepare(sql).get({ code });
