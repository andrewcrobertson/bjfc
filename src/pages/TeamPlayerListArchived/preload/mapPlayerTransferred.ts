import type { IPlayer } from '@this/types/player';
import type { ITeamPlayerTransferred } from '../state';

export const mapPlayerTransferred = (player: IPlayer): ITeamPlayerTransferred => ({
  footyWebNumber: player.footyWebNumber,
  initials: player.initials,
  lastName: player.lastName,
  firstName: player.firstName,
  gender: player.gender,
  club: player.club,
  lastTransferDate: player.lastTransferDate,
});
