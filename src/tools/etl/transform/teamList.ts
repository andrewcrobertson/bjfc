import map from 'lodash/map';
import type { IConfig } from '../config';

export interface Options {
  config: IConfig;
}

export const teamList = ({ config }: Options) => map(config.teams, ({ code, name }) => ({ code, name }));
