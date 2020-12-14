import { nullIfEmptyString } from './nullIfEmptyString';

export const sanitiseGuardian1 = (obj: any) => ({
  familyName: nullIfEmptyString(obj.parentGuardian1FamilyName),
  firstName: nullIfEmptyString(obj.parentGuardian1FirstName),
  phone1: nullIfEmptyString(obj.parentGuardian1TelephoneNumber),
  phone2: nullIfEmptyString(obj.parentGuardian1TelephoneNumber2),
  mobile: nullIfEmptyString(obj.parentGuardian1Mobile),
  email: nullIfEmptyString(obj.parentGuardian1Email),
});
