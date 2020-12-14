import replace from 'lodash/replace';
import { sanitiseSlashDateTime } from '../utility/sanitiseSlashDateTime';

const sanitiseProduct = (product, productMap: any) => productMap[product] ?? product;

export const sanitiseTransaction = ({ transactionDate, product, lineItemTotal, transactionStatus }, productMap: any) => ({
  transactionDate: sanitiseSlashDateTime(transactionDate).date,
  transactionTime: sanitiseSlashDateTime(transactionDate).time,
  product: sanitiseProduct(replace(product, '(ARCHIVED) - ', ''), productMap),
  lineItemTotal,
  transactionStatus,
});
