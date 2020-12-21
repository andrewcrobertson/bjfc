import type { ISanitisedPlayer } from '@this/types/sanitisedPlayer';
import type { ITeamPlayerTransferred } from '../state';

export const mapPlayerTransferred = (player: ISanitisedPlayer): ITeamPlayerTransferred => ({
  footyWebNumber: player.footyWebNumber,
  initials: player.initials,
  lastName: player.lastName,
  firstName: player.firstName,
  gender: player.gender,
  club: player.club,
  lastTransferDate: player.lastTransferDate,
});
