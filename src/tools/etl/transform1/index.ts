import type { IConfig } from './config';
import type { IMember } from './member';
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
