import { getStatusInfoCurrent } from '@this/scripts/utility/getStatusInfo';
import { toInitials } from '@this/scripts/utility/toInitials';

export const toPlayer = (player: any) => ({
  footyWebNumber: player.footyWebNumber,
  status: player.status,
  statusInfo: getStatusInfoCurrent(player.status, player.yearLastRegistered),
  initials: toInitials(`${player.firstName}, ${player.lastName}`),
  lastName: player.lastName,
  firstName: player.firstName,
  dateOfBirth: player.dateOfBirth,
  gender: player.gender,
});
