import fromPairs from 'lodash/fromPairs';
import map from 'lodash/map';
import type { ISanitisedTeam } from '../types/sanitisedTeam';

export interface Options {
  teams: ISanitisedTeam[];
}

const mapTeam = (team: ISanitisedTeam) => ({
  code: team.code,
  ageGroupCode: team.ageGroupCode,
  name: team.name,
  teamGender: team.teamGender,
  officials: [
    { role: 'Head Coach', official: team.headCoach },
    { role: 'Assistant Coach', official: team.assistantCoach },
    { role: 'Team Manager', official: team.teamManager },
    { role: 'Trainer', official: team.trainer },
  ],
});

export const teamOfficialList = ({ teams }: Options) => fromPairs(map(teams, (team) => [team.code, mapTeam(team)]));
