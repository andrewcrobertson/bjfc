import map from 'lodash/map';
import type { IRawTransaction } from '../../types/rawTransaction';
import type { ISanitisedTransaction } from '../../types/sanitisedTransaction';
import { toTransaction } from './toTransaction';

type ProductMap = { [key: string]: string };

export const toTransactions = (transactions: IRawTransaction[], productMap: ProductMap): ISanitisedTransaction[] =>
  map(transactions, (t) => toTransaction(t, productMap));
