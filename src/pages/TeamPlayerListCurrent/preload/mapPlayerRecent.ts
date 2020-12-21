import type { IPlayer } from '@this/types/player';
import type { ITeamPlayerRecent } from '../state';

export const mapPlayerRecent = (player: IPlayer): ITeamPlayerRecent => ({
  footyWebNumber: player.footyWebNumber,
  initials: player.initials,
  lastName: player.lastName,
  firstName: player.firstName,
  gender: player.gender,
  lastTransactionDate: player.lastTransactionDate,
});
