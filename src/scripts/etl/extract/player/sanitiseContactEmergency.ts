import type { IRawPlayerEmergencyContact } from '../../types/rawPlayer';
import { isObjectEmpty } from '../utility/isObjectEmpty';
import { sanitisePhone } from '../utility/sanitisePhone';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseContactEmergency = (obj: any): IRawPlayerEmergencyContact => {
  const raw = {
    relationship: sanitiseString(obj.emergencyContactRelationship),
    name: sanitiseString(obj.emergencyContactName),
    phone1: sanitisePhone(obj.emergencyContactTelephoneNumber),
    phone2: sanitisePhone(obj.emergencyContactTelephoneNumber2),
  };

  return isObjectEmpty(raw) ? null : { ...raw, gender: 'Unknown' };
};
