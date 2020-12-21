import type { Preload, PreloadContext } from '@sapper/common';
import allData from '@this/data/allData';
import type { ISanitisedPlayer } from '@this/tools/etl/types/sanitisedPlayer';
import type { ISanitisedTeam } from '@this/tools/etl/types/sanitisedTeam';
import filter from 'lodash/filter';
import find from 'lodash/find';
import type { IPreloadResponse } from '../state';
import { mapTeam } from './mapTeam';

export const preload = (_context: PreloadContext.PreloadContext) => (page: Preload.Page, _session: any): IPreloadResponse => {
  const players = filter(allData.players, ({ teamCode }) => teamCode === page.params.code) as ISanitisedPlayer[];
  const team = find(allData.teams, ({ code }) => code === page.params.code) as ISanitisedTeam;
  const state = mapTeam(team, players);
  return { state };
};
