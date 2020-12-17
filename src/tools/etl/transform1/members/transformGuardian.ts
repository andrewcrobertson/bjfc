import type { IRawPlayerGuardian } from '../../rawPlayer';
import { toInitials } from '../toInitials';

export const transformGuardian = (guardian: IRawPlayerGuardian) => {
  const initials = toInitials(guardian.firstName, guardian.lastName);
  return { ...guardian, initials, assistInRole: guardian.assistInRole };
};
