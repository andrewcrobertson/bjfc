import { getStatusInfo } from '@this/common/utility/getStatusInfo';
import { nextBirthdayInfo } from '@this/common/utility/nextBirthdayInfo';
import { toInitials } from '@this/common/utility/toInitials';

export const toPlayer = (player: any, nextBirthday: string): any => ({
  footyWebNumber: player.footyWebNumber,
  status: player.status,
  statusInfo: getStatusInfo(player.status, player.club, player.yearLastRegistered, player.yearLastTransferred),
  initials: toInitials(`${player.firstName}, ${player.lastName}`),
  lastName: player.lastName,
  firstName: player.firstName,
  nextBirthdayInfo: nextBirthdayInfo(player.dateOfBirth, nextBirthday),
  gender: player.gender,
});
