import map from 'lodash/map';
import type { IRawProduct } from '../../types/rawProduct';
import type { ISanitisedProduct } from '../../types/sanitisedProduct';
import { transformProduct } from './transformProduct';

export interface Options {
  products: IRawProduct[];
}

export const transformProducts = (options: Options): ISanitisedProduct[] => map(options.products, transformProduct);
