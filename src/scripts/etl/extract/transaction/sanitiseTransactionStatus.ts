import type { TransactionStatusEnum } from '@this/constants/enums';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseTransactionStatus = (value: string): TransactionStatusEnum => {
  const sanitisedString = sanitiseString(value);
  switch (sanitisedString) {
    case 'Paid':
      return 'Paid';
    case 'Unpaid':
      return 'Unpaid';
    default:
      return 'Unknown';
  }
};
