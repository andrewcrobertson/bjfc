import each from 'lodash/each';
import filter from 'lodash/filter';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import pick from 'lodash/pick';
import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedMember } from '../sanitisedMember';
import type { ISanitisedTeam } from '../sanitisedTeam';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedMember[];
  teams: ISanitisedTeam[];
}

const pickActive = ['footyWebNumber', 'status', 'initials', 'lastName', 'firstName', 'gender'];
const pickRecent = ['footyWebNumber', 'status', 'initials', 'lastName', 'firstName', 'gender', 'lastTransactionDate'];

export const teamPlayerCurrentList = ({ teams, members: players }: Options) => {
  const output: any = {};

  each(teams, ({ code, name }) => {
    const teamMembersFiltered = orderBy(
      filter(players, ({ teamCode }) => teamCode === code),
      ['lastName', 'firstName'],
      ['asc', 'asc']
    );
    const team: any = { name, playersActive: [], playersRecent: [] };
    team.playersActive = filter(teamMembersFiltered, (player) => player.status === 'Insured' || player.status === 'Registered');
    team.playersActive = map(team.playersActive, (player) => pick(player, ...pickActive));
    team.playersRecent = filter(teamMembersFiltered, (player) => player.status === 'Recent');
    team.playersRecent = map(team.playersRecent, (player) => pick(player, ...pickRecent));
    output[code] = team;
  });

  return output;
};
