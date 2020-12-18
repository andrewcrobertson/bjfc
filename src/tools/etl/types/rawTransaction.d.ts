import type { TransactionStatusEnum } from '@this/constants/enums';

export interface IRawTransaction {
  footyWebNumber: string;
  transactionDate: string;
  transactionTime: string;
  product: string;
  lineItemTotal: string;
  transactionStatus: TransactionStatusEnum;
}
