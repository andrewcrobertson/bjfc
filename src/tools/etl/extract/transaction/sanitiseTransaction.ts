import type { IRawTransaction } from '../../types/rawTransaction';
import { sanitiseSlashDateTime } from '../utility/sanitiseSlashDateTime';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseTransaction = (product: any): IRawTransaction => ({
  footyWebNumber: sanitiseString(product.footyWebNumber),
  transactionDate: sanitiseSlashDateTime(product.transactionDate).date,
  transactionTime: sanitiseSlashDateTime(product.transactionDate).time,
  product: sanitiseString(product.product),
  lineItemTotal: sanitiseString(product.lineItemTotal),
  transactionStatus: sanitiseString(product.transactionStatus),
});
