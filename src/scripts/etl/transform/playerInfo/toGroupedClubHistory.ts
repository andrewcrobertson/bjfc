import { first, fromPairs, map, mapValues, sortBy } from 'lodash';
import groupBy from 'lodash/groupBy';
import type { IRawConfig } from '../../types/rawConfig';
import type { IRawTransfer } from '../../types/rawTransfer';

export interface Options {
  config: IRawConfig;
  transfers: IRawTransfer[];
}

export const toGroupedClubHistory = (options: Options) => {
  const clubMap = fromPairs(map(options.config.clubMap, ({ from, to }) => [from, to]));

  const mapTransfers = ({ footyWebNumber, applicationDate, finalisedDate, fromClub, toClub }: IRawTransfer) => ({
    footyWebNumber,
    from: clubMap[fromClub] ?? fromClub,
    to: clubMap[toClub] ?? toClub,
    date: finalisedDate ?? applicationDate,
  });

  const toClubHistory = (transfers: IRawTransfer[]) => {
    const sortedTransfers = sortBy(map(transfers, mapTransfers), 'date');
    const firstTransfer = first(sortedTransfers);
    const mappedTransfers = map(sortedTransfers, ({ to, date }) => ({ club: to, date }));
    if (firstTransfer.from !== 'Bayswater') mappedTransfers.unshift({ club: firstTransfer.from, date: null });
    return mappedTransfers;
  };

  const groupedTransfers = groupBy(options.transfers, 'footyWebNumber');
  const groupedClubHistory = mapValues(groupedTransfers, toClubHistory);

  return groupedClubHistory;
};
