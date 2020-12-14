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

const mapOfficial = (official: ISanitisedOfficial) => (official === null ? null : { firstName: official.firstName, familyName: official.familyName });

const mapTeam = (team: ISanitisedTeam) => ({
  code: team.code,
  ageGroupCode: team.ageGroupCode,
  name: team.name,
  teamGender: team.teamGender,
  headCoach: mapOfficial(team.headCoach),
  assistantCoach: mapOfficial(team.assistantCoach),
  trainer: mapOfficial(team.trainer),
  teamManager: mapOfficial(team.teamManager),
});

export const teamList = ({ teams }: Options) => orderBy(map(teams, mapTeam), ['code'], ['desc']);
