import { sanitiseEmail } from '../utility/sanitiseEmail';
import { sanitisePhone } from '../utility/sanitisePhone';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseGuardian2 = (obj: any) => ({
  lastName: sanitiseString(obj.parentGuardian1Surname),
  firstName: sanitiseString(obj.parentGuardian1Firstname),
  phone1: sanitisePhone(obj.parentGuardian2TelephoneNumber),
  phone2: sanitisePhone(obj.parentGuardian2TelephoneNumber2),
  mobile: sanitisePhone(obj.parentGuardian2Mobile),
  email: sanitiseEmail(obj.parentGuardian2Email),
});
