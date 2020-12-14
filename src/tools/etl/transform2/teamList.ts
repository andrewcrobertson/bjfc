import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import type { IConfig } from '../rawConfig

export interface Options {
  config: IConfig;
}

export const teamList = ({ config }: Options) =>
  orderBy(
    map(config.teams, ({ code, shortName, name }) => ({ code, shortName, name })),
    ['code'],
    ['desc']
  );
