import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseGuardian1 = (obj: any) => ({
  familyName: sanitiseString(obj.parentGuardian1FamilyName),
  firstName: sanitiseString(obj.parentGuardian1FirstName),
  phone1: sanitiseString(obj.parentGuardian1TelephoneNumber),
  phone2: sanitiseString(obj.parentGuardian1TelephoneNumber2),
  mobile: sanitiseString(obj.parentGuardian1Mobile),
  email: sanitiseString(obj.parentGuardian1Email),
});
