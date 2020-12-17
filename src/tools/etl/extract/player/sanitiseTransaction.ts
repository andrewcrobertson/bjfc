import replace from 'lodash/replace';
import type { IRawPlayerTransaction } from '../../rawPlayer';
import { sanitiseSlashDateTime } from '../utility/sanitiseSlashDateTime';
import { sanitiseWithMap } from './sanitiseWithMap';

export const sanitiseTransaction = ({ transactionDate, product, lineItemTotal, transactionStatus }, productMap: any): IRawPlayerTransaction => ({
  transactionDate: sanitiseSlashDateTime(transactionDate).date,
  transactionTime: sanitiseSlashDateTime(transactionDate).time,
  product: sanitiseWithMap(replace(product, '(ARCHIVED) - ', ''), productMap),
  lineItemTotal,
  transactionStatus,
});
