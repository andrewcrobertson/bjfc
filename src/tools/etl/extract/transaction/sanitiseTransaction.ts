import type { IRawTransaction } from '../../types/rawTransaction';
import { preSanitiseTransaction } from './preSanitiseTransaction';

export const sanitiseTransaction = (obj: any): IRawTransaction => {
  const transaction = preSanitiseTransaction(obj);
  const invalidTransaction =
    transaction.lineItemTotal === null || transaction.product === null || transaction.transactionStatus === null || transaction.transactionDate === null;
  return invalidTransaction ? null : transaction;
};
