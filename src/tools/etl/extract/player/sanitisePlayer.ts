import compact from 'lodash/compact';
import type { IRawPlayer } from '../../types/rawPlayer';
import { sanitiseObject } from '../utility/sanitiseObject';
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
  guardians: compact([sanitiseObject(sanitiseGuardian1(obj)), sanitiseObject(sanitiseGuardian2(obj))]),
  emergencyContact: sanitiseObject(sanitiseEmergencyContact(obj)),
  registeredContact: sanitiseObject(sanitiseRegisteredContact(obj)),
  disability: sanitiseDisability(obj),
});
