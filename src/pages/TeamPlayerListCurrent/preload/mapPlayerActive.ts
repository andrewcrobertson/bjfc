import type { IPlayer } from '@this/types/player';
import type { ITeamPlayerActive } from '../state';

export const mapPlayerActive = (player: IPlayer): ITeamPlayerActive => ({
  footyWebNumber: player.footyWebNumber,
  status: player.status,
  initials: player.initials,
  lastName: player.lastName,
  firstName: player.firstName,
  gender: player.gender,
});
