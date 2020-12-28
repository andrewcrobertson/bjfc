import type { TeamGenderEnum } from '@this/scripts/constants/enums';
import type { Database } from 'better-sqlite3';

const sql = `SELECT t.code,
  t.name,
  t.topAge,
  t.gender,
  COALESCE(i.insuredCount, 0) insuredCount,
  COALESCE(r.registeredCount, 0) registeredCount,
  COALESCE(o.headCoachCount, 0) headCoachCount,
  COALESCE(o.assistantCoachCount, 0) assistantCoachCount,
  COALESCE(o.teamManagerCount, 0) teamManagerCount,
  COALESCE(o.trainerCount, 0) trainerCount
FROM team t
LEFT JOIN (
    SELECT teamCode,
      COUNT(footyWebNumber) insuredCount
    FROM player
    WHERE status = 'Insured'
    GROUP BY teamCode
  ) i
ON t.code = i.teamCode   
LEFT JOIN (
    SELECT teamCode,
      COUNT(footyWebNumber) registeredCount
    FROM player
    WHERE status = 'Registered'
    GROUP BY teamCode
  ) r
ON t.code = r.teamCode
LEFT JOIN (
    SELECT teamCode,
      SUM(CASE WHEN role = 'Head Coach' THEN 1 ELSE 0 END) headCoachCount,
      SUM(CASE WHEN role = 'Assistant Coach' THEN 1 ELSE 0 END) assistantCoachCount,
      SUM(CASE WHEN role = 'Team Manager' THEN 1 ELSE 0 END) teamManagerCount,
      SUM(CASE WHEN role = 'Trainer' THEN 1 ELSE 0 END) trainerCount
    FROM teamOfficial
    GROUP BY teamCode
  ) o
ON t.code = o.teamCode;`;

export interface ITeamDb {
  code: string;
  name: string;
  topAge: number;
  gender: TeamGenderEnum;
  insuredCount: number;
  registeredCount: number;
  headCoachCount: number;
  assistantCoachCount: number;
  teamManagerCount: number;
  trainerCount: number;
}

export const getTeams = (db: Database): ITeamDb[] => db.prepare(sql).all();
