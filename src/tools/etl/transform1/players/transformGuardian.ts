import type { IRawPlayerGuardian } from '../../types/rawPlayer';
import { toInitials } from '../utility/toInitials';

export const transformGuardian = (guardian: IRawPlayerGuardian) => {
  const initials = toInitials(guardian.firstName, guardian.lastName);
  return { ...guardian, initials, assistInRole: guardian.assistInRole };
};
