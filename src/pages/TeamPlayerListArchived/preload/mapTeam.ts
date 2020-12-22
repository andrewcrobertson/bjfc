import type { IPlayer } from '@this/types/player';
import type { ITeam } from '@this/types/team';
import filter from 'lodash/filter';
import map from 'lodash/map';
import { mapPlayerHistorical } from './mapPlayerHistorical';
import { mapPlayerTransferred } from './mapPlayerTransferred';

export const mapTeam = (team: ITeam, players: IPlayer[]) => {
  const playerTransferred = filter(players, (player) => player.status === 'Transferred');
  const playersHistorical = filter(players, (player) => player.status === 'Historical');

  return {
    code: team.code,
    ageGroupCode: team.ageGroupCode,
    name: team.name,
    teamGender: team.teamGender,
    playersTransferred: map(playerTransferred, mapPlayerTransferred),
    playersHistorical: map(playersHistorical, mapPlayerHistorical),
  };
};
