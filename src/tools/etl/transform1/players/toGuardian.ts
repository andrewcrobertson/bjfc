import type { IRawPlayerGuardian } from '../../types/rawPlayer';
import type { ISanitisedPlayerGuardian } from '../../types/sanitisedPlayer';
import { toInitials } from '../utility/toInitials';

export const toGuardian = (guardian: IRawPlayerGuardian): ISanitisedPlayerGuardian => ({
  lastName: guardian.lastName,
  firstName: guardian.firstName,
  gender: guardian.gender,
  initials: toInitials(guardian.firstName, guardian.lastName),
  phone1: guardian.phone1,
  phone2: guardian.phone2,
  mobile: guardian.mobile,
  email: guardian.email,
  assistInRole: guardian.assistInRole,
});
