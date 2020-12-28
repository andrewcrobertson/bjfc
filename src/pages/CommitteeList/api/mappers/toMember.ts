import { toInitials } from '@this/scripts/utility/toInitials';
import type { IMember } from '../../state';
import type { IMemberDb } from '../dataAccess/getMembers';
import { toContactMethods } from './toContactMethods';

export const toMember = (member: IMemberDb): IMember => ({
  role: member.role,
  initials: toInitials(`${member.firstName}, ${member.lastName}`),
  firstName: member.firstName,
  lastName: member.lastName,
  gender: member.gender,
  contactMethods: toContactMethods([
    { type: 'Phone', value: member.phone },
    { type: 'Email', value: member.email },
  ]),
});
