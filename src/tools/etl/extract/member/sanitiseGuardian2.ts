import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseGuardian2 = (obj: any) => ({
  familyName: sanitiseString(obj.parentGuardian2FamilyName),
  firstName: sanitiseString(obj.parentGuardian2FirstName),
  phone1: sanitiseString(obj.parentGuardian2TelephoneNumber),
  phone2: sanitiseString(obj.parentGuardian2TelephoneNumber2),
  mobile: sanitiseString(obj.parentGuardian2Mobile),
  email: sanitiseString(obj.parentGuardian2Email),
});
