import { first, map, mapValues, sortBy } from 'lodash';
import groupBy from 'lodash/groupBy';
import type { IRawTransfer } from '../../types/rawTransfer';

export interface Options {
  transfers: IRawTransfer[];
}

export const toGroupedClubHistory = (options: Options) => {
  const mapTransfers = ({ footyWebNumber, applicationDate, finalisedDate, fromClub, toClub }: IRawTransfer) => ({
    footyWebNumber,
    from: fromClub,
    to: toClub,
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
