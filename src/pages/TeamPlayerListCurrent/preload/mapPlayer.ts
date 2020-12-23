import type { IPlayer } from '@this/types/player';
import { birthdayInfo } from '@this/utility/birthdayInfo';
import { getStatusInfo } from '@this/utility/getStatusInfo';
import type { ITeamPlayer } from '../state';

export const mapPlayer = (player: IPlayer): ITeamPlayer => ({
  footyWebNumber: player.footyWebNumber,
  status: player.status,
  statusInfo: getStatusInfo(player),
  initials: player.initials,
  lastName: player.lastName,
  firstName: player.firstName,
  dateOfBirth: birthdayInfo(player.dateOfBirth),
  gender: player.gender,
});
