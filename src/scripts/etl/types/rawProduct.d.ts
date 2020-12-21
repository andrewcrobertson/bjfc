import type { TransactionTypeEnum } from '@this/constants/enums';

export interface IRawProduct {
  name: string;
  type: TransactionTypeEnum;
  year: number;
  notes: string;
}
