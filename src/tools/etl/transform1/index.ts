import type { IRawCommittee } from '../types/rawCommittee';
import type { IRawPlayer } from '../types/rawPlayer';
import type { IRawConfig, IRawProducts, IRawTeam } from '../types/rawTeam';
import { transformCommittee } from './commmittee/transformCommittee';
import { transformMembers } from './members/transformMembers';
import { transformTeams } from './teams/transformTeams';

export interface Options {
  config: IRawConfig;
  committee: IRawCommittee[];
  teams: IRawTeam[];
  players: IRawPlayer[];
  products: IRawProducts;
}

export const transform1 = (options: Options) => ({
  config: { seasonYear: options.config.seasonYear },
  committee: transformCommittee(options),
  teams: transformTeams(options),
  members: transformMembers(options),
});
