import type { ICommitteeMember } from '@this/types/committee';
import type { IRawCommittee } from '../../types/rawCommittee';
import { toContactMethods } from '../utility/toContactMethods';
import { toInitials } from '../utility/toInitials';

export const toMember = (member: IRawCommittee): ICommitteeMember => ({
  role: member.role,
  initials: toInitials(member.firstName, member.lastName),
  firstName: member.firstName,
  lastName: member.lastName,
  gender: member.gender,
  contactMethods: toContactMethods([
    { type: 'Phone', value: member.phone },
    { type: 'Email', value: member.email },
  ]),
});
