import type { ISanitisedCommittee } from '../sanitisedCommittee';
import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedPlayer } from '../sanitisedPlayer';
import type { ISanitisedTeam } from '../sanitisedTeam';
import { committeeList } from './committeeList';
import { playerDetail } from './playerDetail';
import { teamList } from './teamList';
import { teamOfficialList } from './teamOfficialList';
import { teamPlayerListArchived } from './teamPlayerListArchived';
import { teamPlayerListCurrent } from './teamPlayerListCurrent';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedPlayer[];
  teams: ISanitisedTeam[];
  committee: ISanitisedCommittee[];
}

export const transform2 = (options: Options) => ({
  standardLayout: { seasonYear: options.config.seasonYear },
  playerDetail: playerDetail(options),
  teamList: teamList(options),
  teamPlayerListCurrent: teamPlayerListCurrent(options),
  teamPlayerListArchived: teamPlayerListArchived(options),
  teamOfficialList: teamOfficialList(options),
  committeeList: committeeList(options),
});
