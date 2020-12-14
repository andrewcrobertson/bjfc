import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseEmergencyContact = (obj: any) => ({
  relationship: sanitiseString(obj.emergencyContactRelationship),
  name: sanitiseString(obj.emergencyContactName),
  phone1: sanitiseString(obj.emergencyContactTelephoneNumber),
  phone2: sanitiseString(obj.emergencyContactTelephoneNumber2),
});
