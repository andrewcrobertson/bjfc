import { last } from 'lodash';
import map from 'lodash/map';
import type { IRawPlayer } from '../../types/rawPlayer';
import type { ISanitisedPlayer } from '../../types/sanitisedPlayer';
import { toInitials } from '../utility/toInitials';
import { transformDisability } from './transformDisability';
import { transformEmergencyContact } from './transformEmergencyContact';
import { transformGuardian } from './transformGuardian';
import { transformPlayerStatus } from './transformPlayerStatus';
import { transformSportsTGContact } from './transformSportsTGContact';

export const transformPlayer = (player: IRawPlayer, teamCode: string, groupedPlayerInfo: any): ISanitisedPlayer => {
  const { insured, registered, registeredRecently, ...playerInfo } = groupedPlayerInfo[player.footyWebNumber] ?? {};
  const clubHistory = (playerInfo.clubHistory as any[]) ?? [];
  const currentClubRecord = last(clubHistory);

  return {
    footyWebNumber: player.footyWebNumber,
    initials: toInitials(player.firstName, player.lastName),
    lastName: player.lastName,
    firstName: player.firstName,
    dateOfBirth: player.dateOfBirth,
    status: transformPlayerStatus(currentClubRecord.club, insured, registered, registeredRecently),
    gender: player.gender,
    guardians: map(player.guardians, (guardian) => transformGuardian(guardian)),
    emergencyContact: transformEmergencyContact(player.emergencyContact),
    contact: transformSportsTGContact(player.registeredContact),
    club: currentClubRecord.club,
    clubHistory,
    lastTransferDate: currentClubRecord === 'Bayswater' ? null : currentClubRecord.date,
    lastTransactionDate: playerInfo.lastTransactionDate ?? null,
    teamCode,
    disability: transformDisability(player.disability),
  };
};
