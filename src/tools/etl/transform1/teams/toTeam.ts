import map from 'lodash/map';
import type { IRawTeam } from '../../types/rawTeam';
import { toTeamGender } from './toTeamGender';
import { toTeamOfficial } from './toTeamOfficial';

export const toTeam = (team: IRawTeam, seasonYear: number) => ({
  code: team.code,
  ageGroupCode: 'U' + Math.max(...team.ages).toString(),
  name: team.name,
  birthYears: map(team.ages, (age) => seasonYear - age),
  playerGenders: team.genders,
  teamGender: toTeamGender(team.genders),
  headCoach: team.headCoach === null ? null : toTeamOfficial(team.headCoach),
  assistantCoach: team.assistantCoach === null ? null : toTeamOfficial(team.assistantCoach),
  trainer: team.trainer === null ? null : toTeamOfficial(team.trainer),
  teamManager: team.teamManager === null ? null : toTeamOfficial(team.teamManager),
});
