import type { IRawPlayerGuardian } from '../../types/rawPlayer';
import { sanitiseEmail } from '../utility/sanitiseEmail';
import { sanitisePhone } from '../utility/sanitisePhone';
import { sanitiseString } from '../utility/sanitiseString';
import { sanitiseAssistInRole } from './sanitiseAssistInRole';

export const sanitiseGuardian2 = (obj: any): IRawPlayerGuardian => ({
  lastName: sanitiseString(obj.parentGuardian2Surname),
  firstName: sanitiseString(obj.parentGuardian2Firstname),
  gender: 'Unknown',
  phone1: sanitisePhone(obj.parentGuardian2TelephoneNumber),
  phone2: sanitisePhone(obj.parentGuardian2TelephoneNumber2),
  mobile: sanitisePhone(obj.parentGuardian2Mobile),
  email: sanitiseEmail(obj.parentGuardian2Email),
  assistInRole: sanitiseAssistInRole(obj.parentGuardian2AssistanceArea),
});
