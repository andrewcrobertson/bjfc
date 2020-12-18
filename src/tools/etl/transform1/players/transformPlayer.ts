import type { PlayerStatusEnum } from '@this/constants/enums';
import { last } from 'lodash';
import map from 'lodash/map';
import type { IRawPlayer } from '../../types/rawPlayer';
import type { ISanitisedPlayer } from '../../types/sanitisedPlayer';
import { arrayToString } from '../utility/arrayToString';
import { toInitials } from '../utility/toInitials';
import { transformEmergencyContact } from './transformEmergencyContact';
import { transformGuardian } from './transformGuardian';
import { transformSportsTGContact } from './transformSportsTGContact';

const transformPlayerStatus = (club: string, insuredThisSeason: boolean, registeredThisSeason: boolean, registeredRecently: boolean): PlayerStatusEnum => {
  if (club !== 'Bayswater') return 'Transferred';
  if (insuredThisSeason) return 'Insured';
  if (registeredThisSeason) return 'Registered';
  if (registeredRecently) return 'Recent';
  return 'Historical';
};

export const transformPlayer = (player: IRawPlayer, teamCode: string, groupedPlayerInfo: any): ISanitisedPlayer => {
  const playerInfo = groupedPlayerInfo[player.footyWebNumber];
  const clubHistory = (playerInfo.clubHistory as any[]) ?? [];
  const registered = playerInfo.registered;
  const insured = playerInfo.insured;
  const registeredRecently = playerInfo.registeredRecently;
  // const firstTransactionDate = playerInfo.firstTransactionDate
  // const lastTransactionDate = playerInfo.lastTransactionDate
  const club = last(clubHistory).club;
  const status = transformPlayerStatus(club, insured, registered, registeredRecently);

  return {
    footyWebNumber: player.footyWebNumber,
    initials: toInitials(player.firstName, player.lastName),
    lastName: player.lastName,
    firstName: player.firstName,
    dateOfBirth: player.dateOfBirth,
    status,
    gender: player.gender,
    guardians: map(player.guardians, (guardian) => transformGuardian(guardian)),
    emergencyContact: transformEmergencyContact(player.emergencyContact),
    contact: transformSportsTGContact(player.contact),
    club,
    clubHistory,
    teamCode,
    disability: arrayToString([player.disabilityType1, player.disabilityType2]),
    disabilityNotes: arrayToString([player.disabilityNote1, player.disabilityNote1]),
  };
};
