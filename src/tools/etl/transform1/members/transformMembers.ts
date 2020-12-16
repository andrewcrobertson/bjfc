import filter from 'lodash/filter';
import find from 'lodash/find';
import first from 'lodash/first';
import fromPairs from 'lodash/fromPairs';
import includes from 'lodash/includes';
import last from 'lodash/last';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import split from 'lodash/split';
import * as playerStatusEnum from '../../constants/playerStatusEnum';
import type { IRawConfig } from '../../rawConfig';
import type { IRawMember } from '../../rawMember';
import type { ISanitisedMember } from '../../sanitisedMember';
import { toInitials } from '../toInitials';
import { transformContact } from './transformContact';
import { transformEmergencyContact } from './transformEmergencyContact';
import { transformGuardian } from './transformGuardian';

export interface Options {
  config: IRawConfig;
  members: IRawMember[];
}

const transformPlayerStatusEnum = (club: string, insuredThisSeason: boolean, registeredThisSeason: boolean, registeredRecently: boolean) => {
  if (club !== 'Bayswater') {
    return playerStatusEnum.transferred;
  } else if (insuredThisSeason) {
    return playerStatusEnum.insured;
  } else if (registeredThisSeason) {
    return playerStatusEnum.registered;
  } else if (registeredRecently) {
    return playerStatusEnum.registered;
  } else {
    return playerStatusEnum.archived;
  }
};
export const transformMembers = ({ config, members: membersRaw }: Options): ISanitisedMember[] => {
  const playerTeamExceptions = fromPairs(map(config.playerTeamExceptions, ({ code, footyWebNumber }) => [footyWebNumber, code]));
  const orderedTeams = sortBy(config.teams, ({ ages }) => Math.max(...ages));
  const members = map(membersRaw, (member) => {
    const yearOfBirth = parseInt(first(split(member.dateOfBirth, '-')));
    const thisSeasonProduct = find(member.transactions, ({ product }) => includes(config.registeredThisSeason, product));
    const registeredThisSeason = thisSeasonProduct !== undefined;
    const teams = filter(orderedTeams, ({ ages, genders }) => includes(ages, config.seasonYear - yearOfBirth) && includes(genders, member.gender));
    const teamCodes = map(teams, ({ code }) => code);
    const club = member.transfers.length === 0 ? 'Bayswater' : last(member.transfers).destinationClub;
    const registeredRecently = find(member.transactions, ({ product }) => includes(config.registeredRecently, product)) !== undefined;
    const insuredThisSeason = thisSeasonProduct !== undefined && thisSeasonProduct.transactionStatus === 'Paid';

    return {
      ...member,
      status: transformPlayerStatusEnum(club, insuredThisSeason, registeredThisSeason, registeredRecently),
      emergencyContact: transformEmergencyContact(member.emergencyContact),
      initials: toInitials(member.firstName, member.lastName),
      yearOfBirth,
      club: member.transfers.length === 0 ? 'Bayswater' : last(member.transfers).destinationClub,
      teamCode: playerTeamExceptions[member.footyWebNumber] ?? first(teamCodes) ?? null,
      registeredRecently,
      registeredThisSeason,
      insuredThisSeason,
      contact: transformContact(member.contact),
      guardians: map(member.guardians, (guardian) => transformGuardian(guardian)),
      lastTransactionDate: last(map(member.transactions, ({ transactionDate }) => transactionDate).sort()) ?? null,
      lastTransferDate: last(map(member.transfers, ({ applicationDate, finalisedDate }) => finalisedDate ?? applicationDate).sort()) ?? null,
    };
  });

  return members;
};
