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

export const teamOfficialList = ({ teams, members }: Options) => {
  const output: any = {};

  each(teams, ({ code, name, headCoach, assistantCoach, teamManager, trainer }) => {
    const team: any = { name, membersRegisteredThisSeason: [], membersRegisteredRecently: [], membersTransferred: [], membersOther: [] };
    const teamMembersFiltered = filter(members, ({ teamCode }) => teamCode === code);

    each(teamMembersFiltered, (member) => {
      if (member.club !== 'Bayswater') {
        team.membersTransferred.push(member);
      } else if (member.registeredThisSeason) {
        team.membersRegisteredThisSeason.push(member);
      } else if (member.registeredRecently) {
        team.membersRegisteredRecently.push(member);
      } else {
        team.membersOther.push(member);
      }
    });

    team.membersRegisteredThisSeason = map(team.membersRegisteredThisSeason, (obj) =>
      pick(obj, 'footyWebNumber', 'initials', 'familyName', 'firstName', 'gender', 'paidThisSeason')
    );
    team.membersRegisteredThisSeason = orderBy(team.membersRegisteredThisSeason, ['familyName', 'firstName'], ['asc', 'asc']);

    team.membersRegisteredRecently = map(team.membersRegisteredRecently, (obj) => pick(obj, 'footyWebNumber', 'initials', 'familyName', 'firstName', 'gender'));
    team.membersRegisteredRecently = orderBy(team.membersRegisteredRecently, ['familyName', 'firstName'], ['asc', 'asc']);

    team.membersTransferred = map(team.membersTransferred, (obj) => pick(obj, 'footyWebNumber', 'initials', 'familyName', 'firstName', 'gender', 'club'));
    team.membersTransferred = orderBy(team.membersTransferred, ['familyName', 'firstName'], ['asc', 'asc']);

    team.membersOther = map(team.membersOther, (obj) => pick(obj, 'footyWebNumber', 'initials', 'familyName', 'firstName', 'gender'));
    team.membersOther = orderBy(team.membersOther, ['familyName', 'firstName'], ['asc', 'asc']);

    team.headCoach = headCoach;
    team.assistantCoach = assistantCoach;
    team.teamManager = teamManager;
    team.trainer = trainer;
    output[code] = team;
  });

  return output;
};
