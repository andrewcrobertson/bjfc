import { nullIfEmptyString } from './nullIfEmptyString';

export const emergencyContact = (obj: any) => ({
  relationship: nullIfEmptyString(obj.emergencyContactRelationship),
  name: nullIfEmptyString(obj.emergencyContactName),
  phone1: nullIfEmptyString(obj.emergencyContactTelephoneNumber),
  phone2: nullIfEmptyString(obj.emergencyContactTelephoneNumber2),
});
