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
  return [];
};
