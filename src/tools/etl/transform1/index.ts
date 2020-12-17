import type { IRawConfig, IRawConfigCommittee, IRawConfigTeam, IRawProducts } from '../rawConfig';
import type { IRawPlayer } from '../rawPlayer';
import { transformCommittee } from './commmittee/transformCommittee';
import { transformMembers } from './members/transformMembers';
import { transformTeams } from './teams/transformTeams';

export interface Options {
  config: IRawConfig;
  committee: IRawConfigCommittee[];
  teams: IRawConfigTeam[];
  members: IRawPlayer[];
  products: IRawProducts;
}

export const transform1 = (options: Options) => ({
  config: { seasonYear: options.config.seasonYear },
  committee: transformCommittee(options),
  teams: transformTeams(options),
  members: transformMembers(options),
});
