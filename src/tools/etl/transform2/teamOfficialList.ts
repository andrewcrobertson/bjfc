import { fromPairs, map } from 'lodash';
import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedMember } from '../sanitisedMember';
import type { ISanitisedTeam } from '../sanitisedTeam';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedMember[];
  teams: ISanitisedTeam[];
}

export const teamOfficialList = ({ teams, members }: Options) =>
  fromPairs(map(teams, ({ code, name, headCoach, assistantCoach, teamManager, trainer }) => [code, { name, headCoach, assistantCoach, teamManager, trainer }]));
