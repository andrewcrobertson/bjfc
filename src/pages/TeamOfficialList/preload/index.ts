import type { Preload, PreloadContext } from '@sapper/common';
import teamsRaw from '@this/data/teams';
import find from 'lodash/find';
import type { IPreloadResponse } from '../state';
import { mapTeamOfficial } from './mapTeamOfficial';

export const preload = (_context: PreloadContext.PreloadContext) => (page: Preload.Page, _session: any): IPreloadResponse => {
  const team = find(teamsRaw, ({ code }) => code === page.params.code);
  const state = {
    code: team.code ?? '',
    ageGroupCode: team.ageGroupCode ?? '',
    name: team.name ?? '',
    teamGender: team.teamGender ?? 'Mixed',
    officials: [
      { role: 'Head Coach', official: mapTeamOfficial(team.headCoach) },
      { role: 'Assistant Coach', official: mapTeamOfficial(team.assistantCoach) },
      { role: 'Team Manager', official: mapTeamOfficial(team.teamManager) },
      { role: 'Trainer', official: mapTeamOfficial(team.trainer) },
    ],
  };

  return { state };
};
