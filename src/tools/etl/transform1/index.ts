import type { IRawConfig } from '../rawConfig';
import type { IRawPlayer } from '../rawPlayer';
import { transformCommittee } from './commmittee/transformCommittee';
import { transformMembers } from './members/transformMembers';
import { transformTeams } from './teams/transformTeams';

export interface Options {
  config: IRawConfig;
  members: IRawPlayer[];
}

export const transform1 = ({ config, members }: Options) => ({
  config: { seasonYear: config.seasonYear },
  committee: transformCommittee({ config }),
  teams: transformTeams({ config }),
  members: transformMembers({ config, members }),
});
