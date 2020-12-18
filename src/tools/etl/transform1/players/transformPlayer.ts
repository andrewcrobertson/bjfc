import first from 'lodash/first';
import map from 'lodash/map';
import split from 'lodash/split';
import type { ISanitisedPlayer } from '../../sanitisedPlayer';
import type { IRawPlayer } from '../../types/rawPlayer';
import { toInitials } from '../utility/toInitials';
import { transformEmergencyContact } from './transformEmergencyContact';
import { transformGuardian } from './transformGuardian';
import { transformSportsTGContact } from './transformSportsTGContact';

export const transformPlayer = (player: IRawPlayer): ISanitisedPlayer => {
  return {
    footyWebNumber: player.footyWebNumber,
    status: null, // player.status,
    initials: toInitials(player.firstName, player.lastName),
    lastName: player.lastName,
    firstName: player.firstName,
    dateOfBirth: player.dateOfBirth,
    yearOfBirth: parseInt(first(split(player.dateOfBirth, '-'))),
    gender: player.gender,
    guardians: map(player.guardians, (guardian) => transformGuardian(guardian)),
    emergencyContact: transformEmergencyContact(player.emergencyContact),
    contact: transformSportsTGContact(player.contact),
    transactions: null, // player.transactions,
    firstTransactionDate: null, // player.firstTransactionDate,
    lastTransactionDate: null, // player.lastTransactionDate,
    transfers: null, // player.transfers,
    lastTransferDate: null, // player.lastTransferDate,
    club: null, // player.club,
    teamCode: null, // player.teamCode,
    disability: null, // player.disability,
    disabilityNotes: null, // player.disabilityNotes,
  };
};
