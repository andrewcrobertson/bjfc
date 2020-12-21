import type { IPlayer } from '@this/types/player';
import type { IPlayersArchived } from '../state';

export const mapPlayerArchived = (player: IPlayer): IPlayersArchived => ({
  footyWebNumber: player.footyWebNumber,
  initials: player.initials,
  lastName: player.lastName,
  firstName: player.firstName,
  gender: player.gender,
  lastTransactionDate: player.lastTransactionDate,
});
