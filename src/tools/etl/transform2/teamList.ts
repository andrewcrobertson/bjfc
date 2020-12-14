import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import type { IRawConfig } from '../rawConfig';

export interface Options {
  config: IRawConfig;
}

export const teamList = ({ config }: Options) =>
  orderBy(
    map(config.teams, ({ code, name }) => ({ code, name })),
    ['code'],
    ['desc']
  );
