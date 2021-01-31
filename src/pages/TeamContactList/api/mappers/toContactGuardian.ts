import type { PlayerContactTypeEnum } from '@this/scripts/constants/enums';
import type { IContact } from '../../state';
import type { IContactGuardianDb } from '../dataAccess/getContactsGuardian';
import { toContactMethods } from './toContactMethods';

export const toContactGuardian = (contact: IContactGuardianDb, maxContactMethods: number): IContact => ({
  type: 'Guardian' as PlayerContactTypeEnum,
  relationship: 'Parent/Guardian',
  name: `${contact.firstName} ${contact.lastName}`,
  contactMethods: toContactMethods(
    [
      { type: 'Phone', value: contact.phone1 },
      { type: 'Phone', value: contact.phone2 },
      { type: 'Phone', value: contact.mobile },
      { type: 'Email', value: contact.email },
    ],
    maxContactMethods
  ),
});
