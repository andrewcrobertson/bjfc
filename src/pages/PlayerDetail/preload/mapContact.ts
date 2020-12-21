import type { IPlayerContact } from '@this/types/player';
import { getName } from '@this/utility/getName';
import { mapRelationship } from './mapRelationship';

export const mapContact = (contact: IPlayerContact) => ({
  code: contact.type,
  relationship: mapRelationship(contact),
  name: getName(contact.name),
  gender: contact.gender,
  initials: contact.initials,
  contactMethods: contact.contactMethods,
  assistInRole: contact.assistInRole,
});
