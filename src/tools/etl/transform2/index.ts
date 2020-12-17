import type { ISanitisedCommittee } from '../sanitisedCommittee';
import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedMember } from '../sanitisedMember';
import type { ISanitisedTeam } from '../sanitisedTeam';
import { committeeList } from './committeeList';
import { playerDetail } from './playerDetail';
import { teamList } from './teamList';
import { teamOfficialList } from './teamOfficialList';
import { teamPlayerArchivedList } from './teamPlayerArchivedList';
import { teamPlayerCurrentList } from './teamPlayerCurrentList';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedMember[];
  teams: ISanitisedTeam[];
  committee: ISanitisedCommittee[];
}

export const transform2 = (options: Options) => ({
  standardLayout: { seasonYear: options.config.seasonYear },
  playerDetail: playerDetail(options),
  teamList: teamList(options),
  teamPlayerCurrentList: teamPlayerCurrentList(options),
  teamPlayerArchivedList: teamPlayerArchivedList(options),
  teamOfficialList: teamOfficialList(options),
  committeeList: committeeList(options),
});
