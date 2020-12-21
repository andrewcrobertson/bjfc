import compact from 'lodash/compact';
import type { IRawPlayer } from '../../types/rawPlayer';
import { sanitisePersonGender } from '../utility/sanitisePersonGender';
import { sanitiseSlashDate } from '../utility/sanitiseSlashDate';
import { sanitiseString } from '../utility/sanitiseString';
import { sanitiseDisability } from './sanitiseDisability';
import { sanitiseEmergencyContact } from './sanitiseEmergencyContact';
import { sanitiseGuardian1 } from './sanitiseGuardian1';
import { sanitiseGuardian2 } from './sanitiseGuardian2';
import { sanitiseRegisteredContact } from './sanitiseRegisteredContact';

export const sanitisePlayer = (obj: any): IRawPlayer => ({
  footyWebNumber: sanitiseString(obj.footyWebNumber),
  activeRecord: obj.activeRecord === 'Yes',
  lastName: sanitiseString(obj.familyName),
  firstName: sanitiseString(obj.firstName),
  dateOfBirth: sanitiseSlashDate(sanitiseString(obj.dateOfBirth)),
  gender: sanitisePersonGender(obj.gender),
  guardians: compact([sanitiseGuardian1(obj), sanitiseGuardian2(obj)]),
  emergencyContact: sanitiseEmergencyContact(obj),
  registeredContact: sanitiseRegisteredContact(obj),
  disability: sanitiseDisability(obj),
});
