import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseOfficial = (obj: any) => ({
  familyName: sanitiseString(obj.familyName),
  firstName: sanitiseString(obj.firstName),
  phone: sanitiseString(obj.phone),
  email: sanitiseString(obj.email),
  gender: sanitiseString(obj.gender),
});
