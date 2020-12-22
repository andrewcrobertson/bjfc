import type { IPlayer } from '@this/types/player';
import type { ITeamPlayersHistorical } from '../state';

export const mapPlayerHistorical = (player: IPlayer): ITeamPlayersHistorical => ({
  footyWebNumber: player.footyWebNumber,
  initials: player.initials,
  lastName: player.lastName,
  firstName: player.firstName,
  gender: player.gender,
  lastTransactionDate: player.lastTransactionDate,
});
