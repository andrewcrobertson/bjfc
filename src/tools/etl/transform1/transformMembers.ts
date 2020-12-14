import { includes, last } from 'lodash';
import compact from 'lodash/compact';
import find from 'lodash/find';
import join from 'lodash/join';
import map from 'lodash/map';
import uniq from 'lodash/uniq';
import type { IRawConfig } from '../rawConfig';
import type { IRawMember } from '../rawMember';

export interface Options {
  config: IRawConfig;
  members: IRawMember[];
}

const toString = (values: string[]) => {
  const output = join(uniq(compact(values)), ', ');
  return output === '' ? null : output;
};

const transformGuardian = ({ familyName, firstName, phone1, phone2, mobile, email }) => {
  const guardian = { familyName, firstName, contacts: [] };
  const phones = toString([phone1, phone2, mobile]);
  if (phones !== null) guardian.contacts.push({ type: 'Phone', value: phones });
  if (email !== null) guardian.contacts.push({ type: 'Email', value: email });
  return guardian;
};

const transformEmergencyContact = ({ relationship, name, phone1, phone2 }) => {
  const emergencyContact = { relationship, name, contacts: [] };
  const phones = toString([phone1, phone2]);
  if (phones !== null) emergencyContact.contacts.push({ type: 'Phone', value: phones });
  return emergencyContact;
};

const transformContact = ({ phoneHome, phoneWork, phoneMobile, email1, email2 }) => {
  const contacts = [];
  const phones = toString([phoneHome, phoneWork, phoneMobile]);
  if (phones !== null) contacts.push({ type: 'Phone', value: phones });
  const email = toString([email1, email2]);
  if (email !== null) contacts.push({ type: 'email', value: email });
  return contacts;
};

export const transformMembers = ({ config, members: membersRaw }: Options) => {
  const members = map(membersRaw, (member) => {
    const contact = transformContact(member.contact ?? ({} as any));
    const emergencyContact = transformEmergencyContact(member.emergencyContact ?? ({} as any));
    const guardians = map(member.guardians, (guardian) => transformGuardian(guardian));
    const registeredLastSeason = find(member.transactions, ({ product }) => includes(config.registeredLastSeason, product)) !== undefined;
    const registeredThisSeason = find(member.transactions, ({ product }) => includes(config.registeredThisSeason, product)) !== undefined;
    const club = member.transfers.length === 0 ? 'Bayswater' : last(member.transfers).destinationClub;

    return { ...member, club, registeredLastSeason, registeredThisSeason, contact, emergencyContact, guardians };
  });

  return members;
};