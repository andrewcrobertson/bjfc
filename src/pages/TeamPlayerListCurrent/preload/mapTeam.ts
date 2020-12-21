import type { ISanitisedPlayer } from '@this/tools/etl/types/sanitisedPlayer';
import type { ISanitisedTeam } from '@this/tools/etl/types/sanitisedTeam';
import filter from 'lodash/filter';
import map from 'lodash/map';
import { mapPlayerActive } from './mapPlayerActive';
import { mapPlayerRecent } from './mapPlayerRecent';

export const mapTeam = (team: ISanitisedTeam, players: ISanitisedPlayer[]) => {
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
