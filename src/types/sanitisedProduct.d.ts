import type { TransactionTypeEnum } from '@this/constants/enums';

export interface ISanitisedProduct {
  name: string;
  type: TransactionTypeEnum;
  year: number;
}
