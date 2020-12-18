import type { IRawConfigClubMap } from '../../types/rawConfig';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseMap = (obj: any): IRawConfigClubMap => ({
  from: sanitiseString(obj.from),
  to: sanitiseString(obj.to),
});
