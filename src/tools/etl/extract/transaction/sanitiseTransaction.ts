import type { IRawTransaction } from '../../types/rawTransaction';
import { sanitiseSlashDateTime } from '../utility/sanitiseSlashDateTime';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseTransaction = (obj: any): IRawTransaction => ({
  footyWebNumber: sanitiseString(obj.footyWebNumber),
  transactionDate: sanitiseSlashDateTime(obj.transactionDate).date,
  transactionTime: sanitiseSlashDateTime(obj.transactionDate).time,
  product: sanitiseString(obj.product),
  lineItemTotal: sanitiseString(obj.lineItemTotal),
  transactionStatus: sanitiseString(obj.transactionStatus),
});
