import map from 'lodash/map';
import type { IRawConfig, IRawConfigTeam } from '../../rawConfig';
import type { ISanitisedTeam } from '../../sanitisedTeam';
import { transformGender } from './transformGender';
import { transformOfficial } from './transformOfficial';

export interface Options {
  config: IRawConfig;
  teams: IRawConfigTeam[];
}

export const transformTeams = (options: Options): ISanitisedTeam[] =>
  map(options.teams, (team) => ({
    code: team.code,
    ageGroupCode: 'U' + Math.max(...team.ages).toString(),
    name: team.name,
    birthYears: map(team.ages, (age) => options.config.seasonYear - age),
    playerGenders: team.genders,
    teamGender: transformGender(team.genders),
    headCoach: transformOfficial(team.headCoach),
    assistantCoach: transformOfficial(team.assistantCoach),
    trainer: transformOfficial(team.trainer),
    teamManager: transformOfficial(team.teamManager),
  }));
