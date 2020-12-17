import map from 'lodash/map';
import type { IRawProducts } from '../../types/rawConfig';
import { sanitiseMap } from '../utility/sanitiseMap';

export const sanitiseProducts = (obj: any): IRawProducts => ({
  registeredRecently: obj.registeredRecently,
  registeredThisSeason: obj.registeredThisSeason,
  productMap: map(obj.productMap, sanitiseMap),
});
