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
  const contactGuardians = map(contacts.contactsGuardian, (c) => toContactGuardian(c));
  const contactsEmergency = map(contacts.contactsEmergency, (c) => toContactEmergency(c));
  const contactsRegistered = map(contacts.contactsRegistered, (c) => toContactRegistered(c));
  return [...contactGuardians, ...contactsEmergency, ...contactsRegistered];
};
