import first from 'lodash/first';
import join from 'lodash/join';
import map from 'lodash/map';
import replace from 'lodash/replace';
import split from 'lodash/split';
import type { IRawPlayerEmergencyContact } from '../../types/rawPlayer';

const getInitials = (name: string) => {
  const tokensRaw = split(replace(name, '-', ' '), ' ');
  const tokensLetters = map(tokensRaw, (t) => first(t));
  return join(tokensLetters, '').toUpperCase();
};

export const transformEmergencyContact = (emergencyContact: IRawPlayerEmergencyContact) =>
  emergencyContact === null ? null : { ...emergencyContact, initials: getInitials(emergencyContact.name) };
