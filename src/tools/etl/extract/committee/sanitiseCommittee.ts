import type { IRawConfigCommittee } from '../../types/rawConfig';
import { sanitiseEmail } from '../utility/sanitiseEmail';
import { sanitisePersonGender } from '../utility/sanitisePersonGender';
import { sanitisePhone } from '../utility/sanitisePhone';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseCommittee = (obj: any): IRawConfigCommittee => ({
  role: sanitiseString(obj.role),
  lastName: sanitiseString(obj.lastName),
  firstName: sanitiseString(obj.firstName),
  phone: sanitisePhone(obj.phone),
  email: sanitiseEmail(obj.email),
  gender: sanitisePersonGender(obj.gender),
});
