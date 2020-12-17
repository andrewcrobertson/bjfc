import { IRawMap } from './common';

export interface IRawProducts {
  registeredRecently: string[];
  registeredThisSeason: string[];
  productMap: IRawMap[];
}
