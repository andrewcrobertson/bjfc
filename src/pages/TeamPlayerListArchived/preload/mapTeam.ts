import type { ISanitisedPlayer } from '@this/types/sanitisedPlayer';
import type { ISanitisedTeam } from '@this/types/sanitisedTeam';
import filter from 'lodash/filter';
import map from 'lodash/map';
import { mapPlayerArchived } from './mapPlayerArchived';
import { mapPlayerTransferred } from './mapPlayerTransferred';

export const mapTeam = (team: ISanitisedTeam, players: ISanitisedPlayer[]) => {
  const playerTransferred = filter(players, (player) => player.status === 'Transferred');
  const playersArchived = filter(players, (player) => player.status === 'Historical');

  return {
    code: team.code,
    ageGroupCode: team.ageGroupCode,
    name: team.name,
    teamGender: team.teamGender,
    playersTransferred: map(playerTransferred, mapPlayerTransferred),
    playersArchived: map(playersArchived, mapPlayerArchived),
  };
};
