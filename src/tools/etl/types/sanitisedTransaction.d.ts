import type { TransactionStatusEnum } from '@this/constants/enums';

export interface ISanitisedTransaction {
  footyWebNumber: string;
  transactionDate: string;
  transactionTime: string;
  product: string;
  lineItemTotal: string;
  transactionStatus: TransactionStatusEnum;
}
