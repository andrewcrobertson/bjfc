import map from 'lodash/map';
import type { ISanitisedTransaction } from '../../../../types/sanitisedTransaction';
import type { IRawTransaction } from '../../types/rawTransaction';
import { toTransaction } from './toTransaction';

type ProductMap = { [key: string]: string };

export const toTransactions = (transactions: IRawTransaction[], productMap: ProductMap): ISanitisedTransaction[] =>
  map(transactions, (t) => toTransaction(t, productMap));
