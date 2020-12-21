import type { Preload, PreloadContext } from '@sapper/common';
import teamsRaw from '@this/data/teams';
import find from 'lodash/find';
import type { IPreloadResponse } from '../state';

export const preload = (_context: PreloadContext.PreloadContext) => (page: Preload.Page, _session: any): IPreloadResponse => {
  const team = find(teamsRaw, ({ code }) => code === page.params.code);
  const state = {
    code: team.code ?? '',
    ageGroupCode: team.ageGroupCode ?? '',
    name: team.name ?? '',
    teamGender: team.teamGender ?? '',
    officials: [
      { role: 'Head Coach', official: team.headCoach ?? null },
      { role: 'Assistant Coach', official: team.assistantCoach ?? null },
      { role: 'Team Manager', official: team.teamManager ?? null },
      { role: 'Trainer', official: team.trainer ?? null },
    ],
  } as any;

  return { state };
};
