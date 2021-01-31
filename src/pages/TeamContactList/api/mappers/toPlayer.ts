import { getStatusInfo } from '@this/scripts/utility/getStatusInfo';
import { toInitials } from '@this/scripts/utility/toInitials';
import filter from 'lodash/filter';
import type { IContactEmergencyDb } from '../dataAccess/getContactsEmergency';
import type { IContactGuardianDb } from '../dataAccess/getContactsGuardian';
import type { IContactRegisteredDb } from '../dataAccess/getContactsRegistered';
import type { IPlayerDb } from '../dataAccess/getPlayers';
import { toContacts } from './toContacts';

export interface IDataDb {
  contactsEmergency: IContactEmergencyDb[];
  contactsGuardian: IContactGuardianDb[];
  contactsRegistered: IContactRegisteredDb[];
  player: IPlayerDb;
}

export const toPlayer = (data: IDataDb) => {
  const contactsEmergency = filter(data.contactsEmergency, (c) => c.footyWebNumber === data.player.footyWebNumber);
  const contactsGuardian = filter(data.contactsGuardian, (c) => c.footyWebNumber === data.player.footyWebNumber);
  const contactsRegistered = filter(data.contactsRegistered, (c) => c.footyWebNumber === data.player.footyWebNumber);
  return {
    footyWebNumber: data.player.footyWebNumber,
    status: data.player.status,
    statusInfo: getStatusInfo(data.player.status, data.player.club, data.player.yearLastRegistered, data.player.yearLastTransferred),
    initials: toInitials(`${data.player.firstName}, ${data.player.lastName}`),
    lastName: data.player.lastName,
    firstName: data.player.firstName,
    dateOfBirth: data.player.dateOfBirth,
    gender: data.player.gender,
    contacts: toContacts({ contactsEmergency, contactsGuardian, contactsRegistered }),
  };
};
