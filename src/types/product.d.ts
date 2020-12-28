import type { TransactionTypeEnum } from '@this/utility/constants/enums';

export interface IProduct {
  name: string;
  type: TransactionTypeEnum;
  year: number;
}
