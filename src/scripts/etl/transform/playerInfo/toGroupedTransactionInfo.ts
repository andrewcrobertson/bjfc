import { find, first, includes, last, mapValues } from 'lodash';
import filter from 'lodash/filter';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import type { IRawConfig } from '../../types/rawConfig';
import type { IRawPlayer } from '../../types/rawPlayer';
import type { IRawProduct } from '../../types/rawProduct';
import type { IRawTeam } from '../../types/rawTeam';
import type { IRawTransaction } from '../../types/rawTransaction';

export interface Options {
  players: IRawPlayer[];
  config: IRawConfig;
  products: IRawProduct[];
  teams: IRawTeam[];
  transactions: IRawTransaction[];
}

export const toGroupedTransactionInfo = (options: Options) => {
  const registrationProducts = filter(options.products, ({ type }) => type === 'Registration');
  const registrationProductsThisSeasonRaw = filter(registrationProducts, ({ year }) => year === options.config.seasonYear);
  const registrationProductsThisSeason = map(registrationProductsThisSeasonRaw, ({ name }) => name);
  const registrationProductsRecentFilter = (year: number) => year === options.config.seasonYear - 1 || year === options.config.seasonYear - 2;
  const registrationProductsRecentRaw = filter(registrationProducts, ({ year }) => registrationProductsRecentFilter(year));
  const registrationProductsRecent = map(registrationProductsRecentRaw, ({ name }) => name);

  const groupedTransactions = groupBy(options.transactions, 'footyWebNumber');
  const transactionInfo = mapValues(groupedTransactions, (transactions: IRawTransaction[]) => {
    const sortedTransactions = sortBy(transactions, 'date');
    const firstTransactionDate = first(sortedTransactions).date;
    const lastTransactionDate = last(sortedTransactions).date;
    const thisSeasonProduct = find(sortedTransactions, ({ product }) => includes(registrationProductsThisSeason, product));
    const registeredRecentlyProduct = find(sortedTransactions, ({ product }) => includes(registrationProductsRecent, product));
    const registeredRecently = registeredRecentlyProduct !== undefined;
    const registered = thisSeasonProduct !== undefined;
    const insured = thisSeasonProduct !== undefined && thisSeasonProduct.status === 'Paid';
    return { registered, insured, registeredRecently, firstTransactionDate, lastTransactionDate };
  });

  return transactionInfo;
};
