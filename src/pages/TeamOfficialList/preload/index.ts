import type { Preload, PreloadContext } from '@sapper/common';
import allData from '@this/data/allData';
import { filter } from 'lodash';
import type { IPreloadResponse } from '../state';

export const preload = (_context: PreloadContext.PreloadContext) => (page: Preload.Page, _session: any): IPreloadResponse => {
  const team = filter(allData.teams, ({ code }) => code === page.params.code) ?? ({} as any);
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
  };

  return { state };
};
