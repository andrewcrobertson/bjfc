import type { ISanitisedProduct } from '@this/types/sanitisedProduct';
import type { IRawProduct } from '../../types/rawProduct';
import { toProductName } from './toProductName';

export const toProduct = (obj: IRawProduct): ISanitisedProduct => ({
  name: toProductName(obj),
  type: obj.type,
  year: obj.year,
});
