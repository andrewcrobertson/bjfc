import map from 'lodash/map';
import type { IRawTransaction } from '../../types/rawTransaction';
import type { ISanitisedTransaction } from '../../types/sanitisedTransaction';
import { transformTransaction } from './transformTransaction';

type ProductMap = { [key: string]: string };

export const transformTransactions = (transactions: IRawTransaction[], productMap: ProductMap): ISanitisedTransaction[] =>
  map(transactions, (t) => transformTransaction(t, productMap));
