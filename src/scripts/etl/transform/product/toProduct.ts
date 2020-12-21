import type { IProduct } from '@this/types/product';
import type { IRawProduct } from '../../types/rawProduct';
import { toProductName } from './toProductName';

export const toProduct = (obj: IRawProduct): IProduct => ({
  name: toProductName(obj),
  type: obj.type,
  year: obj.year,
});
