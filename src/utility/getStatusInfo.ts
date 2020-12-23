import * as playerStatusEnum from '@this/constants/playerStatusEnum';
import type { IPlayer } from '@this/types/player';
import { dateInfo } from '@this/utility/dateInfo';

export const getStatusInfo = (player: IPlayer) => {
  switch (player.status) {
    case playerStatusEnum.insured:
      return 'Insured';
    case playerStatusEnum.registered:
      return 'Registered';
    case playerStatusEnum.recent:
      return `Recent (${dateInfo(player.lastTransactionDate) ?? 'Unknown'})`;
    case playerStatusEnum.transferred:
      return `${player.club} (${dateInfo(player.lastTransferDate) ?? 'Unknown'})`;
    case playerStatusEnum.historical:
      return `Historical (${dateInfo(player.lastTransactionDate) ?? 'Unknown'})`;
    case playerStatusEnum.unknown:
    default:
      return 'Unknown';
  }
};
