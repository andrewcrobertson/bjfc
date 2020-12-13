import compact from 'lodash/compact';
import map from 'lodash/map';
import { contact } from './contact';
import { emergencyContact } from './emergencyContact';
import { guardian1 } from './guardian1';
import { guardian2 } from './guardian2';
import { nullIfEmpty } from './nullIfEmpty';
import { nullIfEmptyString } from './nullIfEmptyString';
import { transaction } from './transaction';
import { transfer } from './transfer';

export const member = (obj: any, transactions: any[], transfers: any[]) => ({
  footyWebNumber: nullIfEmptyString(obj.footyWebNumber),
  activeRecord: obj.activeRecord === 'Yes',
  familyName: nullIfEmptyString(obj.familyName),
  firstName: nullIfEmptyString(obj.firstName),
  dateOfBirth: nullIfEmptyString(obj.dateOfBirth),
  gender: nullIfEmptyString(obj.gender),
  guardians: compact([nullIfEmpty(guardian1(obj)), nullIfEmpty(guardian2(obj))]),
  emergencyContact: nullIfEmpty(emergencyContact(obj)),
  contact: nullIfEmpty(contact(obj)),
  transactions: compact(map(transactions, transaction)),
  transfers: compact(map(transfers, transfer)),
});
