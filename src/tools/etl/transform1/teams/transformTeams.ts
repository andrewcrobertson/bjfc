import map from 'lodash/map';
import type { IRawConfig } from '../../rawConfig';
import type { ISanitisedTeam } from '../../sanitisedTeam';
import { transformGender } from './transformGender';
import { transformOfficial } from './transformOfficial';

export interface Options {
  config: IRawConfig;
}

export const transformTeams = ({ config }: Options): ISanitisedTeam[] =>
  map(config.teams, (team) => ({
    code: team.code,
    ageGroupCode: 'U' + Math.max(...team.ages).toString(),
    name: team.name,
    birthYears: map(team.ages, (age) => config.seasonYear - age),
    playerGenders: team.genders,
    teamGender: transformGender(team.genders),
    headCoach: transformOfficial(team.headCoach),
    assistantCoach: transformOfficial(team.assistantCoach),
    trainer: transformOfficial(team.trainer),
    teamManager: transformOfficial(team.teamManager),
  }));
