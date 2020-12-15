import fromPairs from 'lodash/fromPairs';
import keyBy from 'lodash/keyBy';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import pick from 'lodash/pick';
import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedMember } from '../sanitisedMember';
import type { ISanitisedTeam } from '../sanitisedTeam';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedMember[];
  teams: ISanitisedTeam[];
}

const fields = [
  'footyWebNumber',
  'initials',
  'lastName',
  'firstName',
  'dateOfBirth',
  'club',
  'gender',
  'guardians',
  'emergencyContact',
  'contact',
  'transactions',
  'transfers',
];
export const memberDetail = ({ teams, members: membersRaw }: Options) => {
  const teamMap = fromPairs(map(teams, ({ code, name }) => [code, name]));
  const members = map(membersRaw, (memberRaw) => {
    const member = pick(memberRaw, ...fields) as any;
    member.transactions = orderBy(memberRaw.transactions, ['transactionDate', 'transactionTime'], ['desc', 'desc']);
    member.transfers = orderBy(memberRaw.transfers, ['applicationDate'], ['desc']);
    member.team = teamMap[memberRaw.teamCode] ?? null;
    return member;
  });

  return keyBy(members, 'footyWebNumber');
};
