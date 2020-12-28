import { getDatabase } from '@this/data/getDatabase';
import map from 'lodash/map';
import type { Request } from 'polka';
import type { IState } from '../state';

const teamSql = `SELECT t.code,
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

export const get = async (_req: Request): Promise<IState> => {
  const db = getDatabase();

  const teamListRaw = db.prepare(teamSql).all();
  const teamList = map(teamListRaw, (team) => ({
    code: team.code,
    ageGroupCode: `U${team.topAge}`,
    name: team.name,
    teamGender: team.gender,
    roles: [
      { name: 'Head Coach', filled: team.headCoachCount > 0 },
      { name: 'Assistant Coach', filled: team.assistantCoachCount > 0 },
      { name: 'Team Manager', filled: team.teamManagerCount > 0 },
      { name: 'Trainer', filled: team.trainerCount > 0 },
    ],
    totalCount: team.insuredCount + team.registeredCount,
    insuredCount: team.insuredCount,
    registeredCount: team.registeredCount,
  }));

  return { teams: teamList };
};
