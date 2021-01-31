import type { PlayerContactTypeEnum } from '@this/scripts/constants/enums';
import { toInitials } from '@this/scripts/utility/toInitials';
import type { IContact } from '../../state';
import type { IContactEmergencyDb } from '../dataAccess/getContactsEmergency';
import { toContactMethods } from './toContactMethods';

export const toContactEmergency = (c: IContactEmergencyDb, maxContactMethods: number): IContact => ({
  type: 'Emergency' as PlayerContactTypeEnum,
  relationship: `Emergency Contact ${c.relationship === null ? '' : '(' + c.relationship + ')'}`,
  name: `${c.name}`,
  gender: c.gender,
  initials: toInitials(`Emergency Contact`),
  contactMethods: toContactMethods(
    [
      { type: 'Phone', value: c.phone1 },
      { type: 'Phone', value: c.phone2 },
    ],
    maxContactMethods
  ),
});
