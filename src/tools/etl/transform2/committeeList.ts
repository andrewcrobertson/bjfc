import { map } from 'lodash';
import type { ISanitisedCommittee } from '../sanitisedCommittee';

export interface Options {
  committee: ISanitisedCommittee[];
}

export const committeeList = ({ committee }: Options) =>
  map(committee, (member) => ({
    role: member.role,
    initials: member.initials,
    firstName: member.firstName,
    lastName: member.lastName,
    gender: member.gender,
    contacts: [
      { type: 'Phone', value: member.phone },
      { type: 'Email', value: member.email },
    ],
  }));
