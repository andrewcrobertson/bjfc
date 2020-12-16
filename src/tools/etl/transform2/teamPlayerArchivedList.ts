import { pick } from 'lodash';
import each from 'lodash/each';
import filter from 'lodash/filter';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedMember } from '../sanitisedMember';
import type { ISanitisedTeam } from '../sanitisedTeam';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedMember[];
  teams: ISanitisedTeam[];
}

const pickRegisteredThisSeason = ['footyWebNumber', 'initials', 'lastName', 'firstName', 'gender', 'insuredThisSeason'];
const pickRegisteredRecently = ['footyWebNumber', 'initials', 'lastName', 'firstName', 'gender', 'lastTransactionDate'];
const pickMembersTransferred = ['footyWebNumber', 'initials', 'lastName', 'firstName', 'gender', 'club', 'lastTransferDate'];
const pickMembersOther = ['footyWebNumber', 'initials', 'lastName', 'firstName', 'gender', 'lastTransactionDate'];

export const teamPlayerArchivedList = ({ teams, members }: Options) => {
  const output: any = {};

  each(teams, ({ code, name }) => {
    const team: any = { name, playersActive: [], playersCurrent: [], playersTransferred: [], playersArchived: [] };
    const teamMembersFiltered = filter(members, ({ teamCode }) => teamCode === code);

    each(teamMembersFiltered, (member) => {
      if (member.club !== 'Bayswater') {
        team.playersTransferred.push(member);
      } else if (member.registeredThisSeason) {
        team.playersActive.push(member);
      } else if (member.registeredRecently) {
        team.playersCurrent.push(member);
      } else {
        team.playersArchived.push(member);
      }
    });

    team.playersActive = map(team.playersActive, (obj) => pick(obj, ...pickRegisteredThisSeason));
    team.playersActive = orderBy(team.playersActive, ['lastName', 'firstName'], ['asc', 'asc']);

    team.playersCurrent = map(team.playersCurrent, (obj) => pick(obj, ...pickRegisteredRecently));
    team.playersCurrent = orderBy(team.playersCurrent, ['lastName', 'firstName'], ['asc', 'asc']);

    team.playersTransferred = map(team.playersTransferred, (obj) => pick(obj, pickMembersTransferred));
    team.playersTransferred = orderBy(team.playersTransferred, ['lastName', 'firstName'], ['asc', 'asc']);

    team.playersArchived = map(team.playersArchived, (obj) => pick(obj, ...pickMembersOther));
    team.playersArchived = orderBy(team.playersArchived, ['lastName', 'firstName'], ['asc', 'asc']);

    output[code] = team;
  });

  return output;
};
