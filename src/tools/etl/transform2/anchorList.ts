import map from 'lodash/map';
import type { ISanitisedConfig } from '../types/sanitisedConfig';
import type { ISanitisedPlayer } from '../types/sanitisedPlayer';
import type { ISanitisedTeam } from '../types/sanitisedTeam';
import type { ISanitisedTransaction } from '../types/sanitisedTransaction';

export interface Options {
  config: ISanitisedConfig;
  players: ISanitisedPlayer[];
  teams: ISanitisedTeam[];
  transactions: ISanitisedTransaction[];
}

export const anchorList = (options: Options) => {
  const committeeList = ['/committee/'];
  const playerDetail = map(options.players, ({ footyWebNumber }) => `/players/${footyWebNumber}/`);
  const teamDashboard = ['/'];
  const teamOfficialList = map(options.teams, ({ code }) => `/teams/${code}/officials/`);
  const teamPlayerListArchived = map(options.teams, ({ code }) => `/teams/${code}/players/archived/`);
  const teamPlayerListCurrent = map(options.teams, ({ code }) => `/teams/${code}/players/archived/`);
  return [...committeeList, ...playerDetail, ...teamDashboard, ...teamOfficialList, ...teamPlayerListArchived, ...teamPlayerListCurrent];
};
