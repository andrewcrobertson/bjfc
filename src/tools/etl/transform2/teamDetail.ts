import { includes } from 'lodash';
import each from 'lodash/each';
import filter from 'lodash/filter';
import groupBy from 'lodash/groupBy';
import last from 'lodash/last';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import split from 'lodash/split';
import type { IConfig } from './config';
import type { IMember } from './member';

export interface Options {
  config: IConfig;
  members: IMember[];
}

export const teamDetail = ({ config, members }: Options) => {
  const membersByBirthYear = groupBy(members, (member) => parseInt(last(split(member.dateOfBirth, '/'))));
  const output: any = {};

  each(config.teams, ({ code, name, years, genders }) => {
    const team = { name, members: [] };
    each(years, (year) => {
      const membersAll = membersByBirthYear[year];
      const membersFiltered = filter(membersAll, ({ gender }) => includes(genders, gender));
      const members = map(membersFiltered, ({ footyWebNumber, familyName, firstName, dateOfBirth, gender }) => ({
        footyWebNumber,
        familyName,
        firstName,
        dateOfBirth,
        gender,
      }));
      team.members.push(...members);
    });

    team.members = orderBy(team.members, ['familyName', 'firstName'], ['asc', 'asc']);
    output[code] = team;
  });

  return output;
};
