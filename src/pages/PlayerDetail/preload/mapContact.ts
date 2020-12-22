import type { IPlayerContact } from '@this/types/player';
import { getName } from '@this/utility/getName';
import { mapContactMethods } from './mapContactMethods';
import { mapRelationship } from './mapRelationship';

export const mapContact = (contact: IPlayerContact, maxContactMethods: number) => ({
  type: contact.type,
  relationship: mapRelationship(contact),
  name: getName(contact.name),
  gender: contact.gender,
  initials: contact.initials,
  contactMethods: mapContactMethods(contact.contactMethods, maxContactMethods),
});
