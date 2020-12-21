import type { ISanitisedProduct } from '../../../../types/sanitisedProduct';
import type { IRawProduct } from '../../types/rawProduct';
import { toProductName } from './toProductName';

export const toProduct = (obj: IRawProduct): ISanitisedProduct => ({
  name: toProductName(obj),
  type: obj.type,
  year: obj.year,
});
