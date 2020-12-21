import type { Preload, PreloadContext } from '@sapper/common';
import playersRaw from '@this/data/players';
import teamsRaw from '@this/data/teams';
import type { ISanitisedPlayer } from '@this/types/sanitisedPlayer';
import type { ISanitisedTeam } from '@this/types/sanitisedTeam';
import filter from 'lodash/filter';
import find from 'lodash/find';
import type { IPreloadResponse } from '../state';
import { mapTeam } from './mapTeam';

export const preload = (_context: PreloadContext.PreloadContext) => (page: Preload.Page, _session: any): IPreloadResponse => {
  const players = filter(playersRaw, ({ teamCode }) => teamCode === page.params.code) as ISanitisedPlayer[];
  const team = find(teamsRaw, ({ code }) => code === page.params.code) as ISanitisedTeam;
  const state = mapTeam(team, players);
  return { state };
};
