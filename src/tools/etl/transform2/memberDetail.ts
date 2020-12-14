import { orderBy } from 'lodash';
import keyBy from 'lodash/keyBy';
import map from 'lodash/map';
import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedMember } from '../sanitisedMember';
import type { ISanitisedTeam } from '../sanitisedTeam';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedMember[];
  teams: ISanitisedTeam[];
}

export const memberDetail = ({ config, members: membersRaw }: Options) => {
  const members = map(membersRaw, (member) => {
    const transactions = orderBy(member.transactions, ['transactionDate', 'transactionTime'], ['desc', 'desc']);
    const transfers = orderBy(member.transfers, ['applicationDate'], ['desc']);

    return { ...member, transactions, transfers };
  });

  return keyBy(members, 'footyWebNumber');
};
