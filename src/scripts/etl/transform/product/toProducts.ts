import type { IProduct } from '@this/types/product';
import map from 'lodash/map';
import type { IRawProduct } from '../../types/rawProduct';
import { toProduct } from './toProduct';

export const toProducts = (products: IRawProduct[]): IProduct[] => map(products, toProduct);
