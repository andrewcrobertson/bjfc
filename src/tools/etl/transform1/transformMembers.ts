import filter from 'lodash/filter';
import find from 'lodash/find';
import first from 'lodash/first';
import fromPairs from 'lodash/fromPairs';
import includes from 'lodash/includes';
import join from 'lodash/join';
import last from 'lodash/last';
import map from 'lodash/map';
import replace from 'lodash/replace';
import sortBy from 'lodash/sortBy';
import split from 'lodash/split';
import type { IRawConfig } from '../rawConfig';
import type { IRawMember } from '../rawMember';
import { toInitials } from './toInitials';

export interface Options {
  config: IRawConfig;
  members: IRawMember[];
}

const transformEmergencyContact = (emergencyContact) => {
  if (emergencyContact === null) {
    return null;
  }

  const tokens = split(replace(emergencyContact.name, '-', ' '), ' ');
  const initials = join(
    map(tokens, (t) => first(t)),
    ''
  ).toUpperCase();
  return { initials, ...emergencyContact };
};

const transformGuardian = (guardian) => {
  const initials = toInitials(guardian.firstName, guardian.familyName);
  return { initials, ...guardian };
};

export const transformMembers = ({ config, members: membersRaw }: Options) => {
  const playerTeamExceptions = fromPairs(map(config.playerTeamExceptions, ({ code, footyWebNumber }) => [footyWebNumber, code]));
  const orderedTeams = sortBy(config.teams, ({ ages }) => Math.max(...ages));
  const members = map(membersRaw, (member) => {
    const yearOfBirth = parseInt(first(split(member.dateOfBirth, '-')));
    const thisSeasonProduct = find(member.transactions, ({ product }) => includes(config.registeredThisSeason, product));
    const registeredThisSeason = thisSeasonProduct !== undefined;
    const teams = filter(orderedTeams, ({ ages, genders }) => includes(ages, config.seasonYear - yearOfBirth) && includes(genders, member.gender));
    const teamCodes = map(teams, ({ code }) => code);

    return {
      ...member,
      emergencyContact: transformEmergencyContact(member.emergencyContact),
      initials: toInitials(member.firstName, member.familyName),
      yearOfBirth,
      club: member.transfers.length === 0 ? 'Bayswater' : last(member.transfers).destinationClub,
      teamCode: playerTeamExceptions[member.footyWebNumber] ?? first(teamCodes) ?? null,
      registeredRecently: find(member.transactions, ({ product }) => includes(config.registeredRecently, product)) !== undefined,
      registeredThisSeason,
      paidThisSeason: thisSeasonProduct !== undefined && thisSeasonProduct.transactionStatus === 'Paid',
      guardians: map(member.guardians, (guardian) => transformGuardian(guardian)),
    };
  });

  return members;
};
