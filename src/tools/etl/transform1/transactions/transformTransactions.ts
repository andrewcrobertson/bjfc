import map from 'lodash/map';
import type { IRawTransaction } from '../../types/rawTransaction';
import type { ISanitisedTransaction } from '../../types/sanitisedTransaction';
import { transformTransaction } from './transformTransaction';

type ProductMap = { [key: string]: string };

export interface Options {
  transactions: IRawTransaction[];
}

export const transformTransactions = (options: Options, productMap: ProductMap): ISanitisedTransaction[] =>
  map(options.transactions, (t) => transformTransaction(t, productMap));
