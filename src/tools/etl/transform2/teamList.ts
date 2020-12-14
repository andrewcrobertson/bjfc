import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedMember } from '../sanitisedMember';
import type { ISanitisedTeam } from '../sanitisedTeam';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedMember[];
  teams: ISanitisedTeam[];
}

export const teamList = ({ teams }: Options) =>
  orderBy(
    map(teams, ({ code, name }) => ({ code, name })),
    ['code'],
    ['desc']
  );
