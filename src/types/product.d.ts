import type { TransactionTypeEnum } from '@this/constants/enums';

export interface IProduct {
  name: string;
  type: TransactionTypeEnum;
  year: number;
}
