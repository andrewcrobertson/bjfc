import type { IPlayer } from '@this/types/player';
import { formatDistanceToNow, parseISO } from 'date-fns';
import type { ITeamPlayersHistorical } from '../state';

export const mapPlayerHistorical = (player: IPlayer): ITeamPlayersHistorical => {
  const transactionInfo = player.lastTransactionDate === null ? null : formatDistanceToNow(parseISO(player.lastTransactionDate), { addSuffix: true });
  return {
    footyWebNumber: player.footyWebNumber,
    initials: player.initials,
    lastName: player.lastName,
    firstName: player.firstName,
    gender: player.gender,
    dateOfBirth: player.dateOfBirth,
    transactionInfo,
  };
};
