import type { ISanitisedPlayer } from '@this/types/sanitisedPlayer';
import type { ITeamPlayerActive } from '../state';

export const mapPlayerActive = (player: ISanitisedPlayer): ITeamPlayerActive => ({
  footyWebNumber: player.footyWebNumber,
  status: player.status,
  initials: player.initials,
  lastName: player.lastName,
  firstName: player.firstName,
  gender: player.gender,
});
