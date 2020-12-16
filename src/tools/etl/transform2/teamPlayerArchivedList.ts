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

const pickTransferred = ['footyWebNumber', 'status', 'initials', 'lastName', 'firstName', 'gender', 'club', 'lastTransferDate'];
const pickArchived = ['footyWebNumber', 'status', 'initials', 'lastName', 'firstName', 'gender', 'lastTransactionDate'];

export const teamPlayerArchivedList = ({ teams, members: players }: Options) => {
  const output: any = {};

  each(teams, ({ code, name, ageGroupCode, teamGender }) => {
    const teamMembersFiltered = filter(players, ({ teamCode }) => teamCode === code);
    const teamMembersSorted = orderBy(teamMembersFiltered, ['lastName', 'firstName'], ['asc', 'asc']);
    const team: any = { code, name, ageGroupCode, teamGender, playersTransferred: [], playersArchived: [] };
    team.playersTransferred = filter(teamMembersFiltered, (player) => player.status === 'Transferred');
    team.playersTransferred = map(team.playersTransferred, (player) => pick(player, pickTransferred));
    team.playersArchived = filter(teamMembersFiltered, (player) => player.status === 'Archived');
    team.playersArchived = map(team.playersArchived, (player) => pick(player, ...pickArchived));
    output[code] = team;
  });

  return output;
};
