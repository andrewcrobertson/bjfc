import type { IRawTransaction } from '../../types/rawTransaction';
import { preSanitiseTransaction } from './preSanitiseTransaction';

export const sanitiseTransaction = (obj: any): IRawTransaction => {
  const transaction = preSanitiseTransaction(obj);
  const invalidTransaction = transaction.total === null || transaction.product === null || transaction.status === null || transaction.date === null;
  return invalidTransaction ? null : transaction;
};
