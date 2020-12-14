import compact from 'lodash/compact';
import map from 'lodash/map';
import { sanitiseObject } from '../utility/sanitiseObject';
import { sanitiseSlashDate } from '../utility/sanitiseSlashDate';
import { sanitiseString } from '../utility/sanitiseString';
import { sanitiseContact } from './sanitiseContact';
import { sanitiseEmergencyContact } from './sanitiseEmergencyContact';
import { sanitiseGuardian1 } from './sanitiseGuardian1';
import { sanitiseGuardian2 } from './sanitiseGuardian2';
import { sanitiseTransaction } from './sanitiseTransaction';
import { sanitiseTransfer } from './sanitiseTransfer';

export const sanitiseMember = (obj: any, productMap: any, clubMap: any, transactions: any[], transfers: any[]) => ({
  footyWebNumber: sanitiseString(obj.footyWebNumber),
  activeRecord: obj.activeRecord === 'Yes',
  familyName: sanitiseString(obj.familyName),
  firstName: sanitiseString(obj.firstName),
  dateOfBirth: sanitiseSlashDate(sanitiseString(obj.dateOfBirth)),
  gender: sanitiseString(obj.gender),
  guardians: compact([sanitiseObject(sanitiseGuardian1(obj)), sanitiseObject(sanitiseGuardian2(obj))]),
  emergencyContact: sanitiseObject(sanitiseEmergencyContact(obj)),
  contact: sanitiseObject(sanitiseContact(obj)),
  transactions: compact(map(transactions, (transaction) => sanitiseTransaction(transaction, productMap))),
  transfers: compact(map(transfers, (transfer) => sanitiseTransfer(transfer, clubMap))),
});
