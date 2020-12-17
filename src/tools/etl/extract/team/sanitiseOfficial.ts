import type { IRawTeamOfficial } from '../../types/rawTeam';
import { sanitiseEmail } from '../utility/sanitiseEmail';
import { sanitisePersonGender } from '../utility/sanitisePersonGender';
import { sanitisePhone } from '../utility/sanitisePhone';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseOfficial = (obj: any): IRawTeamOfficial => ({
  lastName: sanitiseString(obj.lastName),
  firstName: sanitiseString(obj.firstName),
  phone: sanitisePhone(obj.phone),
  email: sanitiseEmail(obj.email),
  gender: sanitisePersonGender(obj.gender),
});
