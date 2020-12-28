import { getDatabase } from '@this/utility/getDatabase';
import { toContactMethods } from '@this/utility/toContactMethods';
import { toInitials } from '@this/utility/toInitials';
import find from 'lodash/find';
import type { Request } from 'polka';
import type { IState } from '../state';

const teamSql = `SELECT code, name, topAge, gender FROM team WHERE code = @code;`;
const teamOfficialsSql = `SELECT teamCode, role, lastName, firstName, gender, phone, email FROM teamOfficial WHERE teamCode = @code;`;

const toOfficial = (official: any) =>
  official === null
    ? null
    : {
        initials: toInitials(`${official.firstName}, ${official.lastName}`),
        firstName: official.firstName,
        lastName: official.lastName,
        gender: official.gender,
        contactMethods: toContactMethods([
          { type: 'Phone', value: official.phone },
          { type: 'Email', value: official.email },
        ]),
      };

export const get = async (req: Request): Promise<IState> => {
  const db = getDatabase();

  const teamRaw = db.prepare(teamSql).get({ code: req.params.code });
  const officialsRaw = db.prepare(teamOfficialsSql).all({ code: req.params.code });
  const headCoach = find(officialsRaw, (official) => official.role === 'Head Coach') ?? null;
  const assistantCoach = find(officialsRaw, (official) => official.role === 'Assistant Coach') ?? null;
  const teamManager = find(officialsRaw, (official) => official.role === 'Team Manager') ?? null;
  const trainer = find(officialsRaw, (official) => official.role === 'Trainer') ?? null;

  return {
    code: teamRaw.code,
    ageGroupCode: `U${teamRaw.topAge}`,
    name: teamRaw.name,
    teamGender: teamRaw.gender,
    officials: [
      { role: 'Head Coach', official: toOfficial(headCoach) },
      { role: 'Assistant Coach', official: toOfficial(assistantCoach) },
      { role: 'Team Manager', official: toOfficial(teamManager) },
      { role: 'Trainer', official: toOfficial(trainer) },
    ],
  };
};
