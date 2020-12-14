import type { IConfig } from '../rawConfig';
import type { IMember } from '../rawMember';
import { transformMembers } from './transformMembers';
import { transformTeams } from './transformTeams';

export interface Options {
  config: IConfig;
  members: IMember[];
}

export const transform1 = ({ config, members }: Options) => ({
  teams: transformTeams({ config }),
  members: transformMembers({ config, members }),
});
