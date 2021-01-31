import type { PlayerContactTypeEnum } from '@this/scripts/constants/enums';
import type { IContact } from '../../state';
import type { IContactGuardianDb } from '../dataAccess/getContactsGuardian';
import { toContactMethods } from './toContactMethods';

export const toContactGuardian = (contact: IContactGuardianDb): IContact => ({
  type: 'Guardian' as PlayerContactTypeEnum,
  relationship: 'Parent/Guardian',
  name: `${contact.firstName} ${contact.lastName}`,
  contactMethods: toContactMethods([contact.phone1, contact.phone2, contact.mobile, contact.email]),
});
