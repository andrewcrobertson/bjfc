import type { ISanitisedPlayer } from '@this/types/sanitisedPlayer';
import type { IPlayersArchived } from '../state';

export const mapPlayerArchived = (player: ISanitisedPlayer): IPlayersArchived => ({
  footyWebNumber: player.footyWebNumber,
  initials: player.initials,
  lastName: player.lastName,
  firstName: player.firstName,
  gender: player.gender,
  lastTransactionDate: player.lastTransactionDate,
});
