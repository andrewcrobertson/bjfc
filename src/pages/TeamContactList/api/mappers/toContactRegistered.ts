import type { PlayerContactTypeEnum } from '@this/scripts/constants/enums';
import { toInitials } from '@this/scripts/utility/toInitials';
import type { IContact } from '../../state';
import type { IContactRegisteredDb } from '../dataAccess/getContactsRegistered';
import { toContactMethods } from './toContactMethods';

export const toContactRegistered = (c: IContactRegisteredDb, maxContactMethods: number): IContact => ({
  type: 'Registered' as PlayerContactTypeEnum,
  relationship: 'Registered Contact',
  name: `Registered Contact`,
  gender: c.gender,
  initials: toInitials(`Registered Contact`),
  contactMethods: toContactMethods(
    [
      { type: 'Phone', value: c.phoneHome },
      { type: 'Phone', value: c.phoneMobile },
      { type: 'Phone', value: c.phoneWork },
      { type: 'Email', value: c.email1 },
      { type: 'Email', value: c.email2 },
    ],
    maxContactMethods
  ),
});
