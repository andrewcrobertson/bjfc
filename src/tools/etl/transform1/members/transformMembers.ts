import type { PlayerStatusEnum } from '@this/constants/enums';
import filter from 'lodash/filter';
import find from 'lodash/find';
import first from 'lodash/first';
import fromPairs from 'lodash/fromPairs';
import includes from 'lodash/includes';
import last from 'lodash/last';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import split from 'lodash/split';
import type { IRawConfig, IRawConfigTeam, IRawProducts } from '../../rawConfig';
import type { IRawPlayer } from '../../rawPlayer';
import type { ISanitisedMember } from '../../sanitisedMember';
import { arrayToString } from '../arrayToString';
import { toInitials } from '../toInitials';
import { transformEmergencyContact } from './transformEmergencyContact';
import { transformGuardian } from './transformGuardian';
import { transformRegisteredContact } from './transformRegisteredContact';

export interface Options {
  config: IRawConfig;
  players: IRawPlayer[];
  products: IRawProducts;
  teams: IRawConfigTeam[];
}

const transformPlayerStatusEnum = (club: string, insuredThisSeason: boolean, registeredThisSeason: boolean, registeredRecently: boolean): PlayerStatusEnum => {
  if (club !== 'Bayswater') return 'Transferred';
  if (insuredThisSeason) return 'Insured';
  if (registeredThisSeason) return 'Registered';
  if (registeredRecently) return 'Recent';
  return 'Historical';
};

export const transformMembers = ({ config, players: membersRaw, ...options }: Options): ISanitisedMember[] => {
  const playerTeamExceptions = fromPairs(map(config.playerTeamExceptions, ({ code, footyWebNumber }) => [footyWebNumber, code]));
  const orderedTeams = sortBy(options.teams, ({ ages }) => Math.max(...ages));
  const members = map(membersRaw, (member) => {
    const yearOfBirth = parseInt(first(split(member.dateOfBirth, '-')));
    const thisSeasonProduct = find(member.transactions, ({ product }) => includes(options.products.registeredThisSeason, product));
    const registeredThisSeason = thisSeasonProduct !== undefined;
    const teams = filter(orderedTeams, ({ ages, genders }) => includes(ages, config.seasonYear - yearOfBirth) && includes(genders, member.gender));
    const teamCodes = map(teams, ({ code }) => code);
    const club = member.transfers.length === 0 ? 'Bayswater' : last(member.transfers).destinationClub;
    const registeredRecently = find(member.transactions, ({ product }) => includes(options.products.registeredRecently, product)) !== undefined;
    const insuredThisSeason = thisSeasonProduct !== undefined && thisSeasonProduct.transactionStatus === 'Paid';

    return {
      footyWebNumber: member.footyWebNumber,
      status: transformPlayerStatusEnum(club, insuredThisSeason, registeredThisSeason, registeredRecently),
      initials: toInitials(member.firstName, member.lastName),
      lastName: member.lastName,
      firstName: member.firstName,
      dateOfBirth: member.dateOfBirth,
      yearOfBirth,
      gender: member.gender,
      club: member.transfers.length === 0 ? 'Bayswater' : last(member.transfers).destinationClub,
      teamCode: playerTeamExceptions[member.footyWebNumber] ?? first(teamCodes) ?? null,
      disability: arrayToString([member.disabilityType1, member.disabilityType2]),
      disabilityNotes: arrayToString([member.disabilityNote1, member.disabilityNote1]),
      guardians: map(member.guardians, (guardian) => transformGuardian(guardian)),
      emergencyContact: transformEmergencyContact(member.emergencyContact),
      contact: transformRegisteredContact(member.contact),
      transactions: member.transactions,
      lastTransactionDate: last(map(member.transactions, ({ transactionDate }) => transactionDate).sort()) ?? null,
      firstTransactionDate: first(map(member.transactions, ({ transactionDate }) => transactionDate).sort()) ?? null,
      transfers: member.transfers,
      lastTransferDate: last(map(member.transfers, ({ applicationDate, finalisedDate }) => finalisedDate ?? applicationDate).sort()) ?? null,
    };
  });

  return members;
};
