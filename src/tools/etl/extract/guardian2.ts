import { nullIfEmptyString } from './nullIfEmptyString';

export const guardian2 = (obj: any) => ({
  familyName: nullIfEmptyString(obj.parentGuardian2FamilyName),
  firstName: nullIfEmptyString(obj.parentGuardian2FirstName),
  phone1: nullIfEmptyString(obj.parentGuardian2TelephoneNumber),
  phone2: nullIfEmptyString(obj.parentGuardian2TelephoneNumber2),
  mobile: nullIfEmptyString(obj.parentGuardian2Mobile),
  email: nullIfEmptyString(obj.parentGuardian2Email),
});
