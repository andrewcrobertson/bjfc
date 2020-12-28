import type { PlayerContactTypeEnum } from '@this/constants/enums';
import { toInitials } from '@this/utility/toInitials';
import compact from 'lodash/compact';
import map from 'lodash/map';
import type { IContact } from '../../../state';
import type { IContactEmergencyDb } from '../dataAccess/getContactsEmergency';
import type { IContactGuardianDb } from '../dataAccess/getContactsGuardian';
import type { IContactRegisteredDb } from '../dataAccess/getContactsRegistered';
import { toContactMethods } from './toContactMethods';

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

  return [
    ...map(contacts.contactsGuardian, (c) => ({
      type: 'Guardian' as PlayerContactTypeEnum,
      relationship: 'Parent/Guardian',
      name: `${c.firstName} ${c.lastName}`,
      gender: c.gender,
      initials: toInitials(`${c.firstName} ${c.lastName}`),
      contactMethods: toContactMethods(
        [
          { type: 'Phone', value: c.phone1 },
          { type: 'Phone', value: c.phone2 },
          { type: 'Phone', value: c.mobile },
          { type: 'Email', value: c.email },
        ],
        maxContactMethods
      ),
    })),
    ...map(contacts.contactsEmergency, (c) => ({
      type: 'Emergency' as PlayerContactTypeEnum,
      relationship: 'Emergency Contact',
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
    })),
    ...map(contacts.contactsRegistered, (c) => ({
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
    })),
  ];
};
