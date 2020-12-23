import type { IPlayer } from '@this/types/player';
import { birthdayInfo } from '@this/utility/birthdayInfo';
import { dateInfo } from '@this/utility/dateInfo';
import type { ITeamPlayer } from '../state';

export const mapPlayerHistorical = (player: IPlayer): ITeamPlayer => ({
  footyWebNumber: player.footyWebNumber,
  status: player.status,
  statusInfo: dateInfo(player.lastTransactionDate),
  initials: player.initials,
  lastName: player.lastName,
  firstName: player.firstName,
  gender: player.gender,
  dateOfBirth: birthdayInfo(player.dateOfBirth),
});
