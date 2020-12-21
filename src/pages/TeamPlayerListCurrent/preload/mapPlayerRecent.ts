import type { ISanitisedPlayer } from '@this/types/sanitisedPlayer';
import type { ITeamPlayerRecent } from '../state';

export const mapPlayerRecent = (player: ISanitisedPlayer): ITeamPlayerRecent => ({
  footyWebNumber: player.footyWebNumber,
  initials: player.initials,
  lastName: player.lastName,
  firstName: player.firstName,
  gender: player.gender,
  lastTransactionDate: player.lastTransactionDate,
});
