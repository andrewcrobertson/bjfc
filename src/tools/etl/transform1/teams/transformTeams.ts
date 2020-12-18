import map from 'lodash/map';
import type { ISanitisedTeam } from '../../sanitisedTeam';
import type { IRawConfig } from '../../types/rawConfig';
import type { IRawTeam } from '../../types/rawTeam';
import { transformGender } from './transformGender';
import { transformOfficial } from './transformOfficial';

const mapCommittee = (team: IRawTeam, seasonYear: number) => ({
  code: team.code,
  ageGroupCode: 'U' + Math.max(...team.ages).toString(),
  name: team.name,
  birthYears: map(team.ages, (age) => seasonYear - age),
  playerGenders: team.genders,
  teamGender: transformGender(team.genders),
  headCoach: transformOfficial(team.headCoach),
  assistantCoach: transformOfficial(team.assistantCoach),
  trainer: transformOfficial(team.trainer),
  teamManager: transformOfficial(team.teamManager),
});

export interface Options {
  config: IRawConfig;
  teams: IRawTeam[];
}

export const transformTeams = (options: Options): ISanitisedTeam[] => map(options.teams, (team) => mapCommittee(team, options.config.seasonYear));
