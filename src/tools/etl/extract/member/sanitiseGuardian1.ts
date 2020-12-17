import { sanitiseEmail } from '../utility/sanitiseEmail';
import { sanitisePhone } from '../utility/sanitisePhone';
import { sanitiseString } from '../utility/sanitiseString';
import { sanitiseAssistInRole } from './sanitiseAssistInRole';

export const sanitiseGuardian1 = (obj: any) => ({
  lastName: sanitiseString(obj.parentGuardian1Surname),
  firstName: sanitiseString(obj.parentGuardian1Firstname),
  phone1: sanitisePhone(obj.parentGuardian1TelephoneNumber),
  phone2: sanitisePhone(obj.parentGuardian1TelephoneNumber2),
  mobile: sanitisePhone(obj.parentGuardian1Mobile),
  email: sanitiseEmail(obj.parentGuardian1Email),
  assistInRole: sanitiseAssistInRole(obj.parentGuardian1AssistanceArea),
});
