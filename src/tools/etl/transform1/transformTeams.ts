import type { IRawConfig } from '../rawConfig';

export interface Options {
  config: IRawConfig;
}

export const transformTeams = ({ config }: Options) => config.teams;
