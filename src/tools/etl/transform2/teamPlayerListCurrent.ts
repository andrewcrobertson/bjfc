import each from 'lodash/each';
import filter from 'lodash/filter';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import pick from 'lodash/pick';
import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedPlayer } from '../sanitisedPlayer';
import type { ISanitisedTeam } from '../sanitisedTeam';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedPlayer[];
  teams: ISanitisedTeam[];
}

const pickActive = ['footyWebNumber', 'status', 'initials', 'lastName', 'firstName', 'gender'];
const pickRecent = ['footyWebNumber', 'initials', 'lastName', 'firstName', 'gender', 'lastTransactionDate'];

export const teamPlayerListCurrent = ({ teams, members: players }: Options) => {
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
