import type { IRawProduct } from '../../types/rawProduct';
import type { ISanitisedProduct } from '../../types/sanitisedProduct';
import { transformProductName } from './transformProductName';

export const transformProduct = (obj: IRawProduct): ISanitisedProduct => ({
  name: transformProductName(obj),
  type: obj.type,
  year: obj.year,
});
