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
      return trim(`Last active ${dateInfo(player.lastTransactionDate) ?? ' recently'}`);
    case playerStatusEnum.transferred:
      return trim(`${player.club} ${dateInfo(player.lastTransferDate) ?? ''}`);
    case playerStatusEnum.historical:
      return trim(`Last active ${dateInfo(player.lastTransactionDate) ?? ' a long time ago'}`);
    case playerStatusEnum.unknown:
    default:
      return 'Unknown';
  }
};
