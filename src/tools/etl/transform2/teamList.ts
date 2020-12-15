import { filter } from 'lodash';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedMember } from '../sanitisedMember';
import type { ISanitisedOfficial, ISanitisedTeam } from '../sanitisedTeam';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedMember[];
  teams: ISanitisedTeam[];
}

const mapOfficial = (official: ISanitisedOfficial) => (official === null ? null : { firstName: official.firstName, lastName: official.lastName });

const getRegisteredCount = (code: string, members: ISanitisedMember[]) =>
  filter(members, ({ teamCode, registeredThisSeason }) => teamCode === code && registeredThisSeason).length;

const getPaidCount = (code: string, members: ISanitisedMember[]) =>
  filter(members, ({ teamCode, paidThisSeason }) => teamCode === code && paidThisSeason).length;

const mapTeam = (team: ISanitisedTeam, members: ISanitisedMember[]) => ({
  code: team.code,
  ageGroupCode: team.ageGroupCode,
  name: team.name,
  teamGender: team.teamGender,
  headCoach: mapOfficial(team.headCoach),
  assistantCoach: mapOfficial(team.assistantCoach),
  trainer: mapOfficial(team.trainer),
  teamManager: mapOfficial(team.teamManager),
  registeredCount: getRegisteredCount(team.code, members),
  paidCount: getPaidCount(team.code, members),
});

export const teamList = ({ teams, members }: Options) =>
  orderBy(
    map(teams, (team) => mapTeam(team, members)),
    ['code'],
    ['desc']
  );
