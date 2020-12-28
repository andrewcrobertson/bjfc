import find from 'lodash/find';
import type { IState } from '../../state';
import type { IOfficialDb } from '../dataAccess/getOfficials';
import type { ITeamDb } from '../dataAccess/getTeam';
import { toOfficial } from './toOfficial';

export interface IDataDb {
  officials: IOfficialDb[];
  team: ITeamDb;
}

export const toTeam = (data: IDataDb): IState => {
  const headCoach = find(data.officials, (official) => official.role === 'Head Coach') ?? null;
  const assistantCoach = find(data.officials, (official) => official.role === 'Assistant Coach') ?? null;
  const teamManager = find(data.officials, (official) => official.role === 'Team Manager') ?? null;
  const trainer = find(data.officials, (official) => official.role === 'Trainer') ?? null;

  return {
    code: data.team.code,
    ageGroupCode: `U${data.team.topAge}`,
    name: data.team.name,
    teamGender: data.team.gender,
    officials: [
      { role: 'Head Coach', official: toOfficial(headCoach) },
      { role: 'Assistant Coach', official: toOfficial(assistantCoach) },
      { role: 'Team Manager', official: toOfficial(teamManager) },
      { role: 'Trainer', official: toOfficial(trainer) },
    ],
  };
};
