import type { IRawCommittee } from '../../types/rawCommittee';
import { toInitials } from '../utility/toInitials';

export const transformMember = (member: IRawCommittee) => ({ ...member, initials: toInitials(member.firstName, member.lastName) });
