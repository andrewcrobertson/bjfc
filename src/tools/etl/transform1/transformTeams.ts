import type { IConfig } from './config';

export interface Options {
  config: IConfig;
}

export const transformTeams = ({ config }: Options) => config.teams;
