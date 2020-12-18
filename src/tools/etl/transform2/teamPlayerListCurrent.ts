import each from 'lodash/each';
import filter from 'lodash/filter';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import pick from 'lodash/pick';
import type { ISanitisedConfig } from '../types/sanitisedConfig';
import type { ISanitisedPlayer } from '../types/sanitisedPlayer';
import type { ISanitisedTeam } from '../types/sanitisedTeam';

export interface Options {
  config: ISanitisedConfig;
  players: ISanitisedPlayer[];
  teams: ISanitisedTeam[];
}

const pickActive = ['footyWebNumber', 'status', 'initials', 'lastName', 'firstName', 'gender'];
const pickRecent = ['footyWebNumber', 'initials', 'lastName', 'firstName', 'gender', 'lastTransactionDate'];

export const teamPlayerListCurrent = ({ teams, players }: Options) => {
  const output: any = {};

  each(teams, ({ code, name, ageGroupCode, teamGender }) => {
    const teamMembersFiltered = filter(players, ({ teamCode }) => teamCode === code);
    const teamMembersSorted = orderBy(teamMembersFiltered, ['lastName', 'firstName'], ['asc', 'asc']);
    const team: any = { code, name, ageGroupCode, teamGender, playersActive: [], playersRecent: [] };
    team.playersActive = filter(teamMembersSorted, (player) => player.status === 'Insured' || player.status === 'Registered');
    team.playersActive = map(team.playersActive, (player) => pick(player, ...pickActive));
    team.playersRecent = filter(teamMembersSorted, (player) => player.status === 'Recent');
    team.playersRecent = map(team.playersRecent, (player) => pick(player, ...pickRecent));
    output[code] = team;
  });

  return output;
};
