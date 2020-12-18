import trim from 'lodash/trim';
import type { IRawProduct } from '../../types/rawProduct';
import type { ISanitisedProduct } from '../../types/sanitisedProduct';

export const transformProduct = (obj: IRawProduct): ISanitisedProduct => ({
  name: trim(`${obj.year} ${obj.type} Fees ${obj.notes === null ? '' : '(' + obj.notes + ')'}`),
  type: obj.type,
  year: obj.year,
});
