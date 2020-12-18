import { last, uniq } from 'lodash';
import map from 'lodash/map';
import type { IRawPlayer } from '../../types/rawPlayer';
import type { ISanitisedPlayer } from '../../types/sanitisedPlayer';
import { arrayToString } from '../utility/arrayToString';
import { toInitials } from '../utility/toInitials';
import { transformEmergencyContact } from './transformEmergencyContact';
import { transformGuardian } from './transformGuardian';
import { transformPlayerStatus } from './transformPlayerStatus';
import { transformSportsTGContact } from './transformSportsTGContact';

export const transformPlayer = (player: IRawPlayer, teamCode: string, groupedPlayerInfo: any): ISanitisedPlayer => {
  const { insured, registered, registeredRecently, clubHistory, lastTransactionDate } = groupedPlayerInfo[player.footyWebNumber] ?? {};
  const club = last(clubHistory as any[]).club;

  return {
    footyWebNumber: player.footyWebNumber,
    initials: toInitials(player.firstName, player.lastName),
    lastName: player.lastName,
    firstName: player.firstName,
    dateOfBirth: player.dateOfBirth,
    status: transformPlayerStatus(club, insured, registered, registeredRecently),
    gender: player.gender,
    guardians: map(player.guardians, (guardian) => transformGuardian(guardian)),
    emergencyContact: transformEmergencyContact(player.emergencyContact),
    contact: transformSportsTGContact(player.contact),
    club,
    clubHistory,
    lastTransactionDate,
    teamCode,
    disabilityType: arrayToString(uniq([player.disabilityType1, player.disabilityType2])),
    disabilityNotes: arrayToString(uniq([player.disabilityNote1, player.disabilityNote1])),
  };
};
