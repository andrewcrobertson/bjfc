import type { IConfig } from '../rawConfig';

export interface Options {
  config: IConfig;
}

export const transformTeams = ({ config }: Options) => config.teams;
