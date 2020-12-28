import type { ITeamInfo } from '../../state';
import type { ITeamDb } from '../dataAccess/getTeams';

export const toTeam = (team: ITeamDb): ITeamInfo => ({
  code: team.code,
  ageGroupCode: `U${team.topAge}`,
  name: team.name,
  teamGender: team.gender,
  roles: [
    { name: 'Head Coach', filled: team.headCoachCount > 0 },
    { name: 'Assistant Coach', filled: team.assistantCoachCount > 0 },
    { name: 'Team Manager', filled: team.teamManagerCount > 0 },
    { name: 'Trainer', filled: team.trainerCount > 0 },
  ],
  totalCount: team.insuredCount + team.registeredCount,
  insuredCount: team.insuredCount,
  registeredCount: team.registeredCount,
});
