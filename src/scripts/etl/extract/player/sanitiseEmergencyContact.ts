import type { IRawPlayerEmergencyContact } from '../../types/rawPlayer';
import { sanitisePhone } from '../utility/sanitisePhone';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseEmergencyContact = (obj: any): IRawPlayerEmergencyContact => ({
  relationship: sanitiseString(obj.emergencyContactRelationship),
  name: sanitiseString(obj.emergencyContactName),
  gender: 'Unknown',
  phone1: sanitisePhone(obj.emergencyContactTelephoneNumber),
  phone2: sanitisePhone(obj.emergencyContactTelephoneNumber2),
});
