import type { TransactionStatusEnum } from '@this/constants/enums';

export interface IRawTransaction {
  footyWebNumber: string;
  date: string;
  time: string;
  product: string;
  total: string;
  status: TransactionStatusEnum;
}
