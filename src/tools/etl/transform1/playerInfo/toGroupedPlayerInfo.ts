import first from 'lodash/first';
import fromPairs from 'lodash/fromPairs';
import map from 'lodash/map';
import type { IRawConfig } from '../../types/rawConfig';
import type { IRawPlayer } from '../../types/rawPlayer';
import type { IRawProduct } from '../../types/rawProduct';
import type { IRawTeam } from '../../types/rawTeam';
import type { IRawTransaction } from '../../types/rawTransaction';
import type { IRawTransfer } from '../../types/rawTransfer';
import { toGroupedClubHistory } from './toGroupedClubHistory';
import { toGroupedTransactionInfo } from './toGroupedTransactionInfo';

export interface Options {
  players: IRawPlayer[];
  config: IRawConfig;
  products: IRawProduct[];
  teams: IRawTeam[];
  transactions: IRawTransaction[];
  transfers: IRawTransfer[];
}

export const toGroupedPlayerInfo = (options: Options) => {
  const getInitialClubHistory = (footyWebNumber: string, groupedTransactionInfo: any) => {
    const transactionInfo = groupedTransactionInfo[footyWebNumber] ?? {};
    return { club: 'Bayswater', date: transactionInfo.firstTransactionDate ?? null };
  };

  const toClubHistory = (clubHistory: any[], footyWebNumber: string, groupedTransactionInfo: any) => {
    if (clubHistory.length === 0) {
      const initialClubHistory = getInitialClubHistory(footyWebNumber, groupedTransactionInfo);
      return [initialClubHistory, ...clubHistory];
    } else {
      const firstClubHistory = first(clubHistory);
      if (firstClubHistory.date !== null && firstClubHistory.club !== 'Bayswater') {
        const initialClubHistory = getInitialClubHistory(footyWebNumber, groupedTransactionInfo);
        return [initialClubHistory, ...clubHistory];
      }
    }

    return clubHistory;
  };

  const groupedTransactionInfo = toGroupedTransactionInfo(options);
  const groupedClubHistory = toGroupedClubHistory(options);
  const playerInfo = map(options.players, ({ footyWebNumber }) => ({
    footyWebNumber,
    clubHistory: toClubHistory(groupedClubHistory[footyWebNumber] ?? [], footyWebNumber, groupedTransactionInfo),
    ...(groupedTransactionInfo[footyWebNumber] ?? {}),
  }));

  const groupedPlayerInfo = fromPairs(map(playerInfo, ({ footyWebNumber, ...rest }) => [footyWebNumber, rest]));
  return groupedPlayerInfo;
};
