import type { TransactionTypeEnum } from '@this/constants/enums';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseType = (value: string): TransactionTypeEnum => {
  const sanitisedString = sanitiseString(value);
  switch (sanitisedString) {
    case 'Club':
      return 'Club';
    case 'Registration':
      return 'Registration';
    default:
      return 'Unknown';
  }
};
