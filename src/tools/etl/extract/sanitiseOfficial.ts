import { nullIfEmptyString } from './nullIfEmptyString';

export const sanitiseOfficial = (obj: any) => ({
  familyName: nullIfEmptyString(obj.familyName),
  firstName: nullIfEmptyString(obj.firstName),
  phone: nullIfEmptyString(obj.phone),
  email: nullIfEmptyString(obj.email),
});
