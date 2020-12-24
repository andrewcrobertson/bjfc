import type { IPlayer } from '@this/types/player';
import { getStatusInfo } from '@this/utility/getStatusInfo';
import { nextBirthdayInfo } from '@this/utility/nextBirthdayInfo';
import type { IStatePlayer } from '../state';

export const mapPlayer = (player: IPlayer, nextBirthday: string): IStatePlayer => ({
  footyWebNumber: player.footyWebNumber,
  status: player.status,
  statusInfo: getStatusInfo(player),
  initials: player.initials,
  lastName: player.lastName,
  firstName: player.firstName,
  nextBirthdayInfo: nextBirthdayInfo(player.dateOfBirth, nextBirthday),
  gender: player.gender,
});