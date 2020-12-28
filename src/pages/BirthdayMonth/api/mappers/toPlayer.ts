import { getStatusInfo } from '@this/scripts/utility/getStatusInfo';
import { toInitials } from '@this/scripts/utility/toInitials';
import type { IStatePlayer } from '../../state';
import type { IPlayerDb } from '../dataAccess/getPlayers';

export const toPlayer = (player: IPlayerDb): IStatePlayer => ({
  footyWebNumber: player.footyWebNumber,
  status: player.status,
  statusInfo: getStatusInfo(player.status, player.club, player.yearLastRegistered, player.yearLastTransferred),
  initials: toInitials(`${player.firstName}, ${player.lastName}`),
  lastName: player.lastName,
  firstName: player.firstName,
  dateOfBirth: player.dateOfBirth,
  gender: player.gender,
});
