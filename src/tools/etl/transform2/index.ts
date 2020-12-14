import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedMember } from '../sanitisedMember';
import type { ISanitisedTeam } from '../sanitisedTeam';
import { memberDetail } from './memberDetail';
import { teamDetail } from './teamDetail';
import { teamList } from './teamList';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedMember[];
  teams: ISanitisedTeam;
}

export const transform2 = (options: Options) => ({
  teamList: teamList(options),
  teamDetail: teamDetail(options),
  memberDetail: memberDetail(options),
});
