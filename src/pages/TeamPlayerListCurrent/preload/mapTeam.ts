import type { IPlayer } from '@this/types/player';
import type { ITeam } from '@this/types/team';
import filter from 'lodash/filter';
import map from 'lodash/map';
import { mapPlayerActive } from './mapPlayerActive';
import { mapPlayerRecent } from './mapPlayerRecent';

export const mapTeam = (team: ITeam, players: IPlayer[]) => {
  const playersActive = filter(players, (player) => player.status === 'Insured' || player.status === 'Registered');
  const playersRecent = filter(players, (player) => player.status === 'Recent');

  return {
    code: team.code,
    ageGroupCode: team.ageGroupCode,
    name: team.name,
    teamGender: team.teamGender,
    playersActive: map(playersActive, mapPlayerActive),
    playersRecent: map(playersRecent, mapPlayerRecent),
  };
};
