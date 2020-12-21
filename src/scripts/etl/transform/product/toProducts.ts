import type { ISanitisedProduct } from '@this/types/sanitisedProduct';
import map from 'lodash/map';
import type { IRawProduct } from '../../types/rawProduct';
import { toProduct } from './toProduct';

export const toProducts = (products: IRawProduct[]): ISanitisedProduct[] => map(products, toProduct);
