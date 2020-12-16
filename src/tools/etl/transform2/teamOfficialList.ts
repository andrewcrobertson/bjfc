import { fromPairs, map } from 'lodash';
import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedMember } from '../sanitisedMember';
import type { ISanitisedOfficial, ISanitisedTeam } from '../sanitisedTeam';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedMember[];
  teams: ISanitisedTeam[];
}

const mapOfficial = ({ role, official }: { role: string; official: ISanitisedOfficial }) => ({
  role,
  official:
    official === null
      ? null
      : {
          initials: official.initials,
          firstName: official.firstName,
          lastName: official.lastName,
          gender: official.gender,
          contacts: [
            { type: 'Phone', value: official.phone },
            { type: 'Email', value: official.email },
          ],
        },
});

const mapTeam = (team: ISanitisedTeam) => ({
  code: team.code,
  name: team.name,
  officials: map(
    [
      { role: 'Head Coach', official: team.headCoach },
      { role: 'Assistant Coach', official: team.assistantCoach },
      { role: 'Team Manager', official: team.teamManager },
      { role: 'Trainer', official: team.trainer },
    ],
    (o) => mapOfficial(o)
  ),
});

export const teamOfficialList = ({ teams, members }: Options) => fromPairs(map(teams, (team) => [team.code, mapTeam(team)]));
