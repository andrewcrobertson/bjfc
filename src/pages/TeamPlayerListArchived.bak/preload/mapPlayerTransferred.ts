import type { IPlayer } from '@this/types/player';
import { formatDistanceToNow, parseISO } from 'date-fns';
import type { ITeamPlayerTransferred } from '../state';

export const mapPlayerTransferred = (player: IPlayer): ITeamPlayerTransferred => {
  const club = player.club;
  const date = formatDistanceToNow(parseISO(player.lastTransferDate), { addSuffix: true });
  return {
    footyWebNumber: player.footyWebNumber,
    initials: player.initials,
    lastName: player.lastName,
    firstName: player.firstName,
    gender: player.gender,
    dateOfBirth: player.dateOfBirth,
    clubInfo: `${club} ${date}`,
  };
};
