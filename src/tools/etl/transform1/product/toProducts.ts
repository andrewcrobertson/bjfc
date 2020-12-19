import map from 'lodash/map';
import type { IRawProduct } from '../../types/rawProduct';
import type { ISanitisedProduct } from '../../types/sanitisedProduct';
import { toProduct } from './toProduct';

export const toProducts = (products: IRawProduct[]): ISanitisedProduct[] => map(products, toProduct);
