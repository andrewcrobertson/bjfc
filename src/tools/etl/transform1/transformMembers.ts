import compact from 'lodash/compact';
import filter from 'lodash/filter';
import find from 'lodash/find';
import first from 'lodash/first';
import fromPairs from 'lodash/fromPairs';
import includes from 'lodash/includes';
import join from 'lodash/join';
import last from 'lodash/last';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import split from 'lodash/split';
import uniq from 'lodash/uniq';
import type { IRawConfig } from '../rawConfig';
import type { IRawMember } from '../rawMember';
import { toInitials } from './toInitials';

export interface Options {
  config: IRawConfig;
  members: IRawMember[];
}

const toString = (values: string[]) => {
  const output = join(uniq(compact(values)), ', ');
  return output === '' ? null : output;
};

const transformGuardian = (guardian) => {
  const initials = toInitials(guardian.firstName, guardian.familyName);
  return { initials, ...guardian };
};

export const transformMembers = ({ config, members: membersRaw }: Options) => {
  const playerTeamExceptions = fromPairs(map(config.playerTeamExceptions, ({ code, footyWebNumber }) => [footyWebNumber, code]));
  const orderedTeams = sortBy(config.teams, ({ ages }) => Math.max(...ages));
  const members = map(membersRaw, (member) => {
    const initials = toInitials(member.firstName, member.familyName);
    const yearOfBirth = parseInt(first(split(member.dateOfBirth, '-')));
    const guardians = map(member.guardians, (guardian) => transformGuardian(guardian));
    const registeredLastSeason = find(member.transactions, ({ product }) => includes(config.registeredLastSeason, product)) !== undefined;
    const thisSeasonProduct = find(member.transactions, ({ product }) => includes(config.registeredThisSeason, product));
    const registeredThisSeason = thisSeasonProduct !== undefined;
    const paidThisSeason = thisSeasonProduct !== undefined && thisSeasonProduct.transactionStatus === 'Paid';
    const club = member.transfers.length === 0 ? 'Bayswater' : last(member.transfers).destinationClub;
    const teams = filter(orderedTeams, ({ ages, genders }) => includes(ages, config.seasonYear - yearOfBirth) && includes(genders, member.gender));
    const teamCodes = map(teams, ({ code }) => code);
    const teamCode = playerTeamExceptions[member.footyWebNumber] ?? first(teamCodes) ?? null;
    return {
      ...member,
      initials,
      yearOfBirth,
      club,
      teamCode,
      registeredLastSeason,
      registeredThisSeason,
      paidThisSeason,
      guardians,
    };
  });

  return members;
};
