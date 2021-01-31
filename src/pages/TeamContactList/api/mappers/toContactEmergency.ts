import type { PlayerContactTypeEnum } from '@this/scripts/constants/enums';
import type { IContact } from '../../state';
import type { IContactEmergencyDb } from '../dataAccess/getContactsEmergency';
import { toContactMethods } from './toContactMethods';

export const toContactEmergency = (c: IContactEmergencyDb): IContact => ({
  type: 'Emergency' as PlayerContactTypeEnum,
  relationship: `Emergency Contact ${c.relationship === null ? '' : '- ' + c.relationship}`,
  name: `${c.name}`,
  contactMethods: toContactMethods([c.phone1, c.phone2]),
});
