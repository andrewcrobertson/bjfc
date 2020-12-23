import type { IPlayer } from '@this/types/player';
import { birthdayInfo } from '@this/utility/birthdayInfo';
import { dateInfo } from '@this/utility/dateInfo';
import type { ITeamPlayer } from '../state';

const statusInfo = (player: IPlayer) => {
  const club = player.club ?? 'unknown';
  const lastTransferDate = player.lastTransferDate === null ? 'unknown' : dateInfo(player.lastTransactionDate);
  return `${club} (${lastTransferDate})`;
};

export const mapPlayerTransferred = (player: IPlayer): ITeamPlayer => ({
  footyWebNumber: player.footyWebNumber,
  status: player.status,
  statusInfo: statusInfo(player),
  initials: player.initials,
  lastName: player.lastName,
  firstName: player.firstName,
  dateOfBirth: birthdayInfo(player.dateOfBirth),
  gender: player.gender,
});
