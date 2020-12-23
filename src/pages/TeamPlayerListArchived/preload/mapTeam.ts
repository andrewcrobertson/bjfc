import type { IPlayer } from '@this/types/player';
import type { ITeam } from '@this/types/team';
import filter from 'lodash/filter';
import map from 'lodash/map';
import { mapPlayer } from './mapPlayer';

export const mapTeam = (team: ITeam, players: IPlayer[]) => {
  const playersTransferred = filter(players, (player) => player.status === 'Transferred');
  const playersHistorical = filter(players, (player) => player.status === 'Historical');

  return {
    code: team.code,
    ageGroupCode: team.ageGroupCode,
    name: team.name,
    teamGender: team.teamGender,
    playersTransferred: map(playersTransferred, mapPlayer),
    playersHistorical: map(playersHistorical, mapPlayer),
  };
};
