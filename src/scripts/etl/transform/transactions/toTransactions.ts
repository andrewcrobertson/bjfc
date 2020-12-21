import type { ITransaction } from '@this/types/transaction';
import map from 'lodash/map';
import type { IRawTransaction } from '../../types/rawTransaction';
import { toTransaction } from './toTransaction';

type ProductMap = { [key: string]: string };

export const toTransactions = (transactions: IRawTransaction[], productMap: ProductMap): ITransaction[] =>
  map(transactions, (t) => toTransaction(t, productMap));
