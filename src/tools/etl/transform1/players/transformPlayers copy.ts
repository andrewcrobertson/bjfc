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
import type { ISanitisedPlayer } from '../../sanitisedPlayer';
import type { IRawCommittee } from '../../types/rawCommittee';
import type { IRawConfig } from '../../types/rawConfig';
import type { IRawPlayer } from '../../types/rawPlayer';
import type { IRawProduct } from '../../types/rawProduct';
import type { IRawTeam } from '../../types/rawTeam';
import type { IRawTransaction } from '../../types/rawTransaction';
import type { IRawTransfer } from '../../types/rawTransfer';
import { arrayToString } from '../utility/arrayToString';
import { toInitials } from '../utility/toInitials';
import { transformSportsTGContact } from '././transformSportsTGContact';
import { transformEmergencyContact } from './transformEmergencyContact';
import { transformGuardian } from './transformGuardian';

export interface Options {
  config: IRawConfig;
  committee: IRawCommittee[];
  products: IRawProduct[];
  teams: IRawTeam[];
  players: IRawPlayer[];
  transactions: IRawTransaction[];
  transfers: IRawTransfer[];
}

const transformPlayerStatusEnum = (club: string, insuredThisSeason: boolean, registeredThisSeason: boolean, registeredRecently: boolean): PlayerStatusEnum => {
  if (club !== 'Bayswater') return 'Transferred';
  if (insuredThisSeason) return 'Insured';
  if (registeredThisSeason) return 'Registered';
  if (registeredRecently) return 'Recent';
  return 'Historical';
};

export const transformPlayers = ({ config, players: membersRaw, ...options }: Options): ISanitisedPlayer[] => {
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
      contact: transformSportsTGContact(member.contact),
      transactions: member.transactions,
      lastTransactionDate: last(map(member.transactions, ({ transactionDate }) => transactionDate).sort()) ?? null,
      firstTransactionDate: first(map(member.transactions, ({ transactionDate }) => transactionDate).sort()) ?? null,
      transfers: member.transfers,
      lastTransferDate: last(map(member.transfers, ({ applicationDate, finalisedDate }) => finalisedDate ?? applicationDate).sort()) ?? null,
    };
  });

  return members;
};
