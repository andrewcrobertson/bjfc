import type { ISanitisedCommittee } from '../types/sanitisedCommittee';
import type { ISanitisedConfig } from '../types/sanitisedConfig';
import type { ISanitisedPlayer } from '../types/sanitisedPlayer';
import type { ISanitisedTeam } from '../types/sanitisedTeam';
import type { ISanitisedTransaction } from '../types/sanitisedTransaction';
import { committeeList } from './committeeList';
import { playerDetail } from './playerDetail';
import { teamList } from './teamList';
import { teamOfficialList } from './teamOfficialList';
import { teamPlayerListArchived } from './teamPlayerListArchived';
import { teamPlayerListCurrent } from './teamPlayerListCurrent';

export interface Options {
  config: ISanitisedConfig;
  players: ISanitisedPlayer[];
  teams: ISanitisedTeam[];
  transactions: ISanitisedTransaction[];
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
