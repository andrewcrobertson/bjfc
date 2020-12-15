import type { IRawMemberGuardian } from '../../rawMember';
import { toInitials } from '../toInitials';

export const transformGuardian = (guardian: IRawMemberGuardian) => {
  const initials = toInitials(guardian.firstName, guardian.familyName);
  return { initials, ...guardian };
};
