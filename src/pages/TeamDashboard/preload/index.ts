import type { Preload, PreloadContext } from '@sapper/common';
import allData from '@this/data/allData';
import { groupBy, map, orderBy } from 'lodash';
import type { IPreloadResponse } from '../state';
import { mapTeam } from './mapTeam';

export const preload = (_context: PreloadContext.PreloadContext) => (_page: Preload.Page, _session: any): IPreloadResponse => {
  const players = groupBy(allData.players, 'teamCode');
  const teamsMapped = map(allData.teams, (team) => mapTeam(team as any, players[team.code] as any[]));
  const teams = orderBy(teamsMapped, ['code'], ['desc']);
  return { state: { teams } };
};
