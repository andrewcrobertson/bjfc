import replace from 'lodash/replace';
import { parseTransactionDateTime } from './parseTransactionDateTime';

export const transaction = ({ transactionDate, product, lineItemTotal, transactionStatus }) => ({
  transactionDate: parseTransactionDateTime(transactionDate).date,
  transactionTime: parseTransactionDateTime(transactionDate).time,
  product: replace(product, '(ARCHIVED) - ', ''),
  lineItemTotal,
  transactionStatus,
});
