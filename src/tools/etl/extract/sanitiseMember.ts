import compact from 'lodash/compact';
import map from 'lodash/map';
import { nullIfEmpty } from './nullIfEmpty';
import { nullIfEmptyString } from './nullIfEmptyString';
import { sanitiseContact } from './sanitiseContact';
import { sanitiseEmergencyContact } from './sanitiseEmergencyContact';
import { sanitiseGuardian1 } from './sanitiseGuardian1';
import { sanitiseGuardian2 } from './sanitiseGuardian2';
import { sanitiseTransaction } from './sanitiseTransaction';
import { sanitiseTransfer } from './sanitiseTransfer';

export const sanitiseMember = (obj: any, transactions: any[], transfers: any[]) => ({
  footyWebNumber: nullIfEmptyString(obj.footyWebNumber),
  activeRecord: obj.activeRecord === 'Yes',
  familyName: nullIfEmptyString(obj.familyName),
  firstName: nullIfEmptyString(obj.firstName),
  dateOfBirth: nullIfEmptyString(obj.dateOfBirth),
  gender: nullIfEmptyString(obj.gender),
  guardians: compact([nullIfEmpty(sanitiseGuardian1(obj)), nullIfEmpty(sanitiseGuardian2(obj))]),
  emergencyContact: nullIfEmpty(sanitiseEmergencyContact(obj)),
  contact: nullIfEmpty(sanitiseContact(obj)),
  transactions: compact(map(transactions, sanitiseTransaction)),
  transfers: compact(map(transfers, sanitiseTransfer)),
});
