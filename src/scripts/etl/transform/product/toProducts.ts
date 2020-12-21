import map from 'lodash/map';
import type { ISanitisedProduct } from '../../../../types/sanitisedProduct';
import type { IRawProduct } from '../../types/rawProduct';
import { toProduct } from './toProduct';

export const toProducts = (products: IRawProduct[]): ISanitisedProduct[] => map(products, toProduct);
