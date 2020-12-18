import type { ISanitisedPlayer } from '../../sanitisedPlayer';
import type { IRawPlayer } from '../../types/rawPlayer';

export const transformPlayer = (player: IRawPlayer): ISanitisedPlayer => {
  return {
    footyWebNumber: player.footyWebNumber,
    status: null, // player.status,
    initials: null, // player.initials,
    lastName: null, // player.lastName,
    firstName: null, // player.firstName,
    dateOfBirth: null, // player.dateOfBirth,
    yearOfBirth: null, // player.yearOfBirth,
    gender: null, // player.gender,
    guardians: null, // player.guardians,
    emergencyContact: null, // player.emergencyContact,
    contact: null, // player.contact,
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
