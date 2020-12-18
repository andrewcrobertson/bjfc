import type { IRawProduct } from '../../types/rawProduct';
import { sanitiseString } from '../utility/sanitiseString';
import { sanitiseType } from './sanitiseType';

export const sanitiseProducts = (obj: any): IRawProduct => ({
  name: sanitiseString(obj.name),
  type: sanitiseType(obj.type),
  year: obj.year,
  notes: sanitiseString(obj.notes),
});
