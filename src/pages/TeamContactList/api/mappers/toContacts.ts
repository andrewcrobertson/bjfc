import compact from 'lodash/compact';
import map from 'lodash/map';
import type { IContact } from '../../state';
import type { IContactEmergencyDb } from '../dataAccess/getContactsEmergency';
import type { IContactGuardianDb } from '../dataAccess/getContactsGuardian';
import type { IContactRegisteredDb } from '../dataAccess/getContactsRegistered';
import { toContactEmergency } from './toContactEmergency';
import { toContactGuardian } from './toContactGuardian';
import { toContactRegistered } from './toContactRegistered';

export interface IContactsDb {
  contactsEmergency: IContactEmergencyDb[];
  contactsGuardian: IContactGuardianDb[];
  contactsRegistered: IContactRegisteredDb[];
}

export const toContacts = (contacts: IContactsDb): IContact[] => {
  const maxContactMethods = Math.max(
    ...[
      ...map(contacts.contactsEmergency, (c) => compact([c.phone1, c.phone2]).length),
      ...map(contacts.contactsGuardian, (c) => compact([c.phone1, c.phone2, c.mobile, c.email]).length),
      ...map(contacts.contactsRegistered, (c) => compact([c.phoneHome, c.phoneMobile, c.phoneWork, c.email1, c.email2]).length),
    ]
  );

  const contactGuardians = map(contacts.contactsGuardian, (c) => toContactGuardian(c, maxContactMethods));
  const contactsEmergency = map(contacts.contactsEmergency, (c) => toContactEmergency(c, maxContactMethods));
  const contactsRegistered = map(contacts.contactsRegistered, (c) => toContactRegistered(c, maxContactMethods));

  return [...contactGuardians, ...contactsEmergency, ...contactsRegistered];
};
