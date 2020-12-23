import type { IPlayer } from '@this/types/player';
import { birthdayInfo } from '@this/utility/birthdayInfo';
import type { ITeamPlayer } from '../state';

export const mapPlayerActive = (player: IPlayer): ITeamPlayer => ({
  footyWebNumber: player.footyWebNumber,
  status: player.status,
  statusInfo: null,
  initials: player.initials,
  lastName: player.lastName,
  firstName: player.firstName,
  dateOfBirth: birthdayInfo(player.dateOfBirth),
  gender: player.gender,
});
