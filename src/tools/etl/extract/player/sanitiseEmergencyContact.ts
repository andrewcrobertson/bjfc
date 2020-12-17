import { sanitisePhone } from '../utility/sanitisePhone';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseEmergencyContact = (obj: any) => ({
  relationship: sanitiseString(obj.emergencyContactRelationship),
  name: sanitiseString(obj.emergencyContactName),
  phone1: sanitisePhone(obj.emergencyContactTelephoneNumber),
  phone2: sanitisePhone(obj.emergencyContactTelephoneNumber2),
});
