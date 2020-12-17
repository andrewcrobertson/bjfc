import first from 'lodash/first';
import join from 'lodash/join';
import map from 'lodash/map';
import replace from 'lodash/replace';
import split from 'lodash/split';
import type { IRawPlayerEmergencyContact } from '../../types/rawPlayer';

export const transformEmergencyContact = (emergencyContact: IRawPlayerEmergencyContact) => {
  if (emergencyContact === null) {
    return null;
  }

  const tokens = split(replace(emergencyContact.name, '-', ' '), ' ');
  const initials = join(
    map(tokens, (t) => first(t)),
    ''
  ).toUpperCase();

  return { initials, ...emergencyContact };
};
