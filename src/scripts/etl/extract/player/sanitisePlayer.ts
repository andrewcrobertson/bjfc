import compact from 'lodash/compact';
import type { IRawPlayer } from '../../types/rawPlayer';
import { sanitisePersonGender } from '../utility/sanitisePersonGender';
import { sanitiseSlashDate } from '../utility/sanitiseSlashDate';
import { sanitiseString } from '../utility/sanitiseString';
import { sanitiseContactEmergency } from './sanitiseContactEmergency';
import { sanitiseContactGuardian1 } from './sanitiseContactGuardian1';
import { sanitiseContactGuardian2 } from './sanitiseContactGuardian2';
import { sanitiseContactRegistered } from './sanitiseContactRegistered';
import { sanitiseDisability } from './sanitiseDisability';

export const sanitisePlayer = (obj: any): IRawPlayer => ({
  footyWebNumber: sanitiseString(obj.footyWebNumber),
  activeRecord: obj.activeRecord === 'Yes',
  lastName: sanitiseString(obj.familyName),
  firstName: sanitiseString(obj.firstName),
  dateOfBirth: sanitiseSlashDate(sanitiseString(obj.dateOfBirth)),
  gender: sanitisePersonGender(obj.gender),
  guardians: compact([sanitiseContactGuardian1(obj), sanitiseContactGuardian2(obj)]),
  emergencyContact: sanitiseContactEmergency(obj),
  registeredContact: sanitiseContactRegistered(obj),
  disability: sanitiseDisability(obj),
});
