import type { IRawTransaction } from '../../types/rawTransaction';
import { sanitiseSlashDateTime } from '../utility/sanitiseSlashDateTime';
import { sanitiseString } from '../utility/sanitiseString';
import { sanitiseProduct } from './sanitiseProduct';
import { sanitiseTransactionStatus } from './sanitiseTransactionStatus';

export const preSanitiseTransaction = (obj: any): IRawTransaction => ({
  footyWebNumber: sanitiseString(obj.footyWebNumber),
  date: sanitiseSlashDateTime(obj.transactionDate).date,
  time: sanitiseSlashDateTime(obj.transactionDate).time,
  product: sanitiseProduct(obj.product),
  total: sanitiseString(obj.lineItemTotal),
  status: sanitiseTransactionStatus(obj.transactionStatus),
});
