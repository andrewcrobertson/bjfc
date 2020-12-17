import type { IRawConfigOfficial } from '../../rawConfig';
import { sanitiseEmail } from '../utility/sanitiseEmail';
import { sanitisePhone } from '../utility/sanitisePhone';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseOfficial = (obj: any): IRawConfigOfficial => ({
  lastName: sanitiseString(obj.lastName),
  firstName: sanitiseString(obj.firstName),
  phone: sanitisePhone(obj.phone),
  email: sanitiseEmail(obj.email),
  gender: sanitiseString(obj.gender),
});
