import type { IPlayer } from '@this/types/player';
import type { ITeam } from '@this/types/team';
import filter from 'lodash/filter';
import map from 'lodash/map';
import { mapPlayer } from './mapPlayer';

export const mapTeam = (team: ITeam, players: IPlayer[]) => {
  const playersActive = filter(players, (player) => player.status === 'Insured' || player.status === 'Registered');
  const playersRecent = filter(players, (player) => player.status === 'Recent');

  return {
    code: team.code,
    ageGroupCode: team.ageGroupCode,
    name: team.name,
    teamGender: team.teamGender,
    playersActive: map(playersActive, mapPlayer),
    playersRecent: map(playersRecent, mapPlayer),
  };
};
