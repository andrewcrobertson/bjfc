import { last } from 'lodash';
import type { IRawPlayer } from '../../types/rawPlayer';
import type { ISanitisedPlayer } from '../../types/sanitisedPlayer';
import { toInitials } from '../utility/toInitials';
import { toContacts } from './toContacts';
import { toDisability } from './toDisability';
import { toPlayerStatus } from './toPlayerStatus';

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
    contacts: toContacts(player),
    club: currentClubRecord.club,
    clubHistory,
    lastTransferDate: currentClubRecord === 'Bayswater' ? null : currentClubRecord.date,
    lastTransactionDate: playerInfo.lastTransactionDate ?? null,
    teamCode,
    disability: player.disability === null ? null : toDisability(player.disability),
  };
};
