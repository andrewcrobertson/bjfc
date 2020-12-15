import type { IRawConfig } from '../rawConfig';
import type { IRawMember } from '../rawMember';
import { transformMembers } from './transformMembers';
import { transformTeams } from './transformTeams';

export interface Options {
  config: IRawConfig;
  members: IRawMember[];
}

export const transform1 = ({ config, members }: Options) => ({
  config: { seasonYear: config.seasonYear },
  teams: transformTeams({ config }),
  members: transformMembers({ config, members }),
});