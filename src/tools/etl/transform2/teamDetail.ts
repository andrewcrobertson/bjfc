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

export const teamDetail = ({ teams, members }: Options) => {
  const output: any = {};

  each(teams, ({ code, name }) => {
    const team = { name, members: [] };
    const membersFiltered = filter(members, ({ teamCode }) => teamCode === code);
    const membersMapped = map(membersFiltered, ({ footyWebNumber, familyName, firstName, dateOfBirth, gender }) => ({
      footyWebNumber,
      familyName,
      firstName,
      dateOfBirth,
      gender,
    }));
    team.members = orderBy(membersMapped, ['familyName', 'firstName'], ['asc', 'asc']);
    output[code] = team;
  });

  return output;
};
