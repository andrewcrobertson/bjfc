import type { ISanitisedPlayerContact } from '@this/types/sanitisedPlayer';
import first from 'lodash/first';
import join from 'lodash/join';
import map from 'lodash/map';
import replace from 'lodash/replace';
import split from 'lodash/split';
import type { IRawPlayerEmergencyContact } from '../../types/rawPlayer';
import { toContactMethods } from '../utility/toContactMethods';

const getInitials = (name: string) => {
  const tokensRaw = split(replace(name, '-', ' '), ' ');
  const tokensInitials = map(tokensRaw, (t) => first(t));
  return join(tokensInitials, '').toUpperCase();
};

export const toContactEmergency = (obj: IRawPlayerEmergencyContact): ISanitisedPlayerContact => ({
  type: 'Emergency',
  relationship: obj.relationship,
  name: obj.name,
  gender: 'Unknown',
  initials: getInitials(obj.name),
  contactMethods: toContactMethods([
    { type: 'Phone', value: obj.phone1 },
    { type: 'Phone', value: obj.phone2 },
  ]),
  assistInRole: null,
});
