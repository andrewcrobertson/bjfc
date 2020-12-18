import map from 'lodash/map';
import type { ISanitisedTeam } from '../../sanitisedTeam';
import type { IRawConfig } from '../../types/rawConfig';
import type { IRawTeam } from '../../types/rawTeam';
import { transformTeam } from './transformTeam';

export interface Options {
  config: IRawConfig;
  teams: IRawTeam[];
}

export const transformTeams = (options: Options): ISanitisedTeam[] => map(options.teams, (team) => transformTeam(team, options.config.seasonYear));
