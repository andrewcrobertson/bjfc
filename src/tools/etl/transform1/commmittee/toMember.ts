import type { IRawCommittee } from '../../types/rawCommittee';
import type { ISanitisedCommittee } from '../../types/sanitisedCommittee';
import { toInitials } from '../utility/toInitials';

export const toMember = (member: IRawCommittee): ISanitisedCommittee => ({
  role: member.role,
  initials: toInitials(member.firstName, member.lastName),
  firstName: member.firstName,
  lastName: member.lastName,
  gender: member.gender,
  phone: member.phone,
  email: member.email,
});
