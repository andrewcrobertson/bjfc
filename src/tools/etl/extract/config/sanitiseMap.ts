import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseMap = (obj: any) => ({
  from: sanitiseString(obj.from),
  to: sanitiseString(obj.to),
});
