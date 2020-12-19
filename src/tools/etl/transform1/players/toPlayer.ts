import { last } from 'lodash';
import map from 'lodash/map';
import type { IRawPlayer } from '../../types/rawPlayer';
import type { ISanitisedPlayer } from '../../types/sanitisedPlayer';
import { toInitials } from '../utility/toInitials';
import { toDisability } from './toDisability';
import { toEmergencyContact } from './toEmergencyContact';
import { toGuardian } from './toGuardian';
import { toPlayerStatus } from './toPlayerStatus';
import { toRegisteredContact } from './toRegisteredContact';

export const toPlayer = (player: IRawPlayer, teamCode: string, groupedPlayerInfo: any): ISanitisedPlayer => {
  const { insured, registered, registeredRecently, ...playerInfo } = groupedPlayerInfo[player.footyWebNumber] ?? {};
  const clubHistory = (playerInfo.clubHistory as any[]) ?? [];
  const currentClubRecord = last(clubHistory);

  return {
    footyWebNumber: player.footyWebNumber,
    initials: toInitials(player.firstName, player.lastName),
    lastName: player.lastName,
    firstName: player.firstName,
    dateOfBirth: player.dateOfBirth,
    status: toPlayerStatus(currentClubRecord.club, insured, registered, registeredRecently),
    gender: player.gender,
    guardians: map(player.guardians, (guardian) => toGuardian(guardian)),
    emergencyContact: player.emergencyContact === null ? null : toEmergencyContact(player.emergencyContact),
    registeredContact: player.registeredContact === null ? null : toRegisteredContact(player.registeredContact),
    club: currentClubRecord.club,
    clubHistory,
    lastTransferDate: currentClubRecord === 'Bayswater' ? null : currentClubRecord.date,
    lastTransactionDate: playerInfo.lastTransactionDate ?? null,
    teamCode,
    disability: player.disability === null ? null : toDisability(player.disability),
  };
};
