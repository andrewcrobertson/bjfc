import { sanitiseEmail } from '../utility/sanitiseEmail';
import { sanitisePhone } from '../utility/sanitisePhone';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseCommittee = (obj: any) => ({
  role: sanitiseString(obj.role),
  familyName: sanitiseString(obj.familyName),
  firstName: sanitiseString(obj.firstName),
  phone: sanitisePhone(obj.phone),
  email: sanitiseEmail(obj.email),
  gender: sanitiseString(obj.gender),
});
