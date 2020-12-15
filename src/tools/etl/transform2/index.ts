import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedMember } from '../sanitisedMember';
import type { ISanitisedTeam } from '../sanitisedTeam';
import { memberDetail } from './memberDetail';
import { teamList } from './teamList';
import { teamMemberList } from './teamMemberList';
import { teamOfficialList } from './teamOfficialList';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedMember[];
  teams: ISanitisedTeam[];
}

export const transform2 = (options: Options) => ({
  standardLayout: { seasonYear: options.config.seasonYear },
  memberDetail: memberDetail(options),
  teamList: teamList(options),
  teamMemberList: teamMemberList(options),
  teamOfficialList: teamOfficialList(options),
});