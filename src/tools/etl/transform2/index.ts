import type { ISanitisedCommittee } from '../sanitisedCommittee';
import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedMember } from '../sanitisedMember';
import type { ISanitisedTeam } from '../sanitisedTeam';
import { committeeList } from './committeeList';
import { memberDetail } from './memberDetail';
import { teamList } from './teamList';
import { teamOfficialList } from './teamOfficialList';
import { teamPlayerActiveList } from './teamPlayerActiveList';
import { teamPlayerArchivedList } from './teamPlayerArchivedList';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedMember[];
  teams: ISanitisedTeam[];
  committee: ISanitisedCommittee[];
}

export const transform2 = (options: Options) => ({
  standardLayout: { seasonYear: options.config.seasonYear },
  memberDetail: memberDetail(options),
  teamList: teamList(options),
  teamPlayerActiveList: teamPlayerActiveList(options),
  teamPlayerArchivedList: teamPlayerArchivedList(options),
  teamOfficialList: teamOfficialList(options),
  committeeList: committeeList(options),
});
