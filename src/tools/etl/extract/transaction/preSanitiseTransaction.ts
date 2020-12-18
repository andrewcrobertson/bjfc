import type { IRawTransaction } from '../../types/rawTransaction';
import { sanitiseSlashDateTime } from '../utility/sanitiseSlashDateTime';
import { sanitiseString } from '../utility/sanitiseString';
import { sanitiseProduct } from './sanitiseProduct';
import { sanitiseTransactionStatus } from './sanitiseTransactionStatus';

export const preSanitiseTransaction = (obj: any): IRawTransaction => ({
  footyWebNumber: sanitiseString(obj.footyWebNumber),
  transactionDate: sanitiseSlashDateTime(obj.transactionDate).date,
  transactionTime: sanitiseSlashDateTime(obj.transactionDate).time,
  product: sanitiseProduct(obj.product),
  lineItemTotal: sanitiseString(obj.lineItemTotal),
  transactionStatus: sanitiseTransactionStatus(obj.transactionStatus),
});
