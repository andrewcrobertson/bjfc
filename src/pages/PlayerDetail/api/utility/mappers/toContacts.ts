import compact from 'lodash/compact';
import map from 'lodash/map';
import type { IContact } from '../../../state';
import type { IContactEmergencyDb } from '../dataAccess/getContactsEmergency';
import type { IContactGuardianDb } from '../dataAccess/getContactsGuardian';
import type { IContactRegisteredDb } from '../dataAccess/getContactsRegistered';

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
      ...map(contacts.contactsRegistered, (c) => compact([c.email1, c.email2, c.phoneHome, c.phoneMobile, c.phoneWork]).length),
    ]
  );
  return [];
};
