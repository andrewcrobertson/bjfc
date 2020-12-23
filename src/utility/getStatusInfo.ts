import * as playerStatusEnum from '@this/constants/playerStatusEnum';
import type { IPlayer } from '@this/types/player';
import { dateInfo } from '@this/utility/dateInfo';
import trim from 'lodash/trim';

export const getStatusInfo = (player: IPlayer) => {
  switch (player.status) {
    case playerStatusEnum.insured:
      return 'Insured';
    case playerStatusEnum.registered:
      return 'Registered';
    case playerStatusEnum.recent:
      return trim(`Recent ${dateInfo(player.lastTransactionDate) ?? ''}`);
    case playerStatusEnum.transferred:
      return trim(`${player.club} ${dateInfo(player.lastTransferDate) ?? ''}`);
    case playerStatusEnum.historical:
      return trim(`Historical ${dateInfo(player.lastTransactionDate) ?? ''}`);
    case playerStatusEnum.unknown:
    default:
      return 'Unknown';
  }
};
