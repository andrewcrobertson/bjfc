import replace from 'lodash/replace';
import { parseTransactionDateTime } from './parseTransactionDateTime';

const sanitiseProduct = (product, productMap: any) => productMap[product] ?? product;

export const sanitiseTransaction = ({ transactionDate, product, lineItemTotal, transactionStatus }, productMap: any) => ({
  transactionDate: parseTransactionDateTime(transactionDate).date,
  transactionTime: parseTransactionDateTime(transactionDate).time,
  product: sanitiseProduct(replace(product, '(ARCHIVED) - ', ''), productMap),
  lineItemTotal,
  transactionStatus,
});
