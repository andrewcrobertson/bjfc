import map from 'lodash/map';
import type { IRawProduct } from '../../types/rawProduct';
import type { ISanitisedProduct } from '../../types/sanitisedProduct';
import { transformProduct } from './transformProduct';

export const transformProducts = (products: IRawProduct[]): ISanitisedProduct[] => map(products, transformProduct);
