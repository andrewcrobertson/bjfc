import type { IPlayerContact } from '@this/types/player';

export const mapRelationship = (contact: IPlayerContact) => (contact.relationship === null ? contact.type : `${contact.type} (${contact.relationship})`);
