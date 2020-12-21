import type { Preload, PreloadContext } from '@sapper/common';
import playersRaw from '@this/data/players';
import teamsRaw from '@this/data/teams';
import { groupBy, map, orderBy } from 'lodash';
import type { IPreloadResponse } from '../state';
import { mapTeam } from './mapTeam';

export const preload = (_context: PreloadContext.PreloadContext) => (_page: Preload.Page, _session: any): IPreloadResponse => {
  const players = groupBy(playersRaw, 'teamCode');
  const teamsMapped = map(teamsRaw, (team) => mapTeam(team as any, players[team.code]));
  const teams = orderBy(teamsMapped, ['code'], ['desc']);
  return { state: { teams } };
};
