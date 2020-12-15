import { sanitiseEmail } from '../utility/sanitiseEmail';
import { sanitisePhone } from '../utility/sanitisePhone';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseGuardian1 = (obj: any) => ({
  familyName: sanitiseString(obj.parentGuardian1FamilyName),
  firstName: sanitiseString(obj.parentGuardian1FirstName),
  phone1: sanitisePhone(obj.parentGuardian1TelephoneNumber),
  phone2: sanitisePhone(obj.parentGuardian1TelephoneNumber2),
  mobile: sanitisePhone(obj.parentGuardian1Mobile),
  email: sanitiseEmail(obj.parentGuardian1Email),
});
