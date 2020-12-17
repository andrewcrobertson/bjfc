import type { IRawMap } from '../../types/common';
import { sanitiseString } from './sanitiseString';

export const sanitiseMap = (obj: any): IRawMap => ({
  from: sanitiseString(obj.from),
  to: sanitiseString(obj.to),
});
