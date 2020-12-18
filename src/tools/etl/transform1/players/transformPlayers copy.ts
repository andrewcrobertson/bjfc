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
  const members = map(membersRaw, (player) => {
    const yearOfBirth = parseInt(first(split(player.dateOfBirth, '-')));
    const thisSeasonProduct = find(player.transactions, ({ product }) => includes(options.products.registeredThisSeason, product));
    const registeredThisSeason = thisSeasonProduct !== undefined;
    const teams = filter(orderedTeams, ({ ages, genders }) => includes(ages, config.seasonYear - yearOfBirth) && includes(genders, player.gender));
    const teamCodes = map(teams, ({ code }) => code);
    const club = player.transfers.length === 0 ? 'Bayswater' : last(player.transfers).destinationClub;
    const registeredRecently = find(player.transactions, ({ product }) => includes(options.products.registeredRecently, product)) !== undefined;
    const insuredThisSeason = thisSeasonProduct !== undefined && thisSeasonProduct.transactionStatus === 'Paid';

    return {
      footyWebNumber: player.footyWebNumber,
      status: transformPlayerStatusEnum(club, insuredThisSeason, registeredThisSeason, registeredRecently),
      initials: toInitials(player.firstName, player.lastName),
      lastName: player.lastName,
      firstName: player.firstName,
      dateOfBirth: player.dateOfBirth,
      yearOfBirth,
      gender: player.gender,
      club: player.transfers.length === 0 ? 'Bayswater' : last(player.transfers).destinationClub,
      teamCode: playerTeamExceptions[player.footyWebNumber] ?? first(teamCodes) ?? null,
      disability: arrayToString([player.disabilityType1, player.disabilityType2]),
      disabilityNotes: arrayToString([player.disabilityNote1, player.disabilityNote1]),
      guardians: map(player.guardians, (guardian) => transformGuardian(guardian)),
      emergencyContact: transformEmergencyContact(player.emergencyContact),
      contact: transformSportsTGContact(player.contact),
      transactions: player.transactions,
      lastTransactionDate: last(map(player.transactions, ({ transactionDate }) => transactionDate).sort()) ?? null,
      firstTransactionDate: first(map(player.transactions, ({ transactionDate }) => transactionDate).sort()) ?? null,
      transfers: player.transfers,
      lastTransferDate: last(map(player.transfers, ({ applicationDate, finalisedDate }) => finalisedDate ?? applicationDate).sort()) ?? null,
    };
  });

  return members;
};
