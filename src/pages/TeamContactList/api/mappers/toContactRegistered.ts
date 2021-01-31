import type { PlayerContactTypeEnum } from '@this/scripts/constants/enums';
import type { IContact } from '../../state';
import type { IContactRegisteredDb } from '../dataAccess/getContactsRegistered';
import { toContactMethods } from './toContactMethods';

export const toContactRegistered = (c: IContactRegisteredDb): IContact => ({
  type: 'Registered' as PlayerContactTypeEnum,
  relationship: '',
  name: `Registered`,
  contactMethods: toContactMethods([c.phoneHome, c.phoneMobile, c.phoneWork, c.email1, c.email2]),
});
