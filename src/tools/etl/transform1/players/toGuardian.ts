import type { IRawPlayerGuardian } from '../../types/rawPlayer';
import type { ISanitisedPlayerGuardian } from '../../types/sanitisedPlayer';
import { toContactMethods } from '../utility/toContactMethods';
import { toInitials } from '../utility/toInitials';

export const toGuardian = (guardian: IRawPlayerGuardian): ISanitisedPlayerGuardian => ({
  lastName: guardian.lastName,
  firstName: guardian.firstName,
  gender: guardian.gender,
  initials: toInitials(guardian.firstName, guardian.lastName),
  contactMethods: toContactMethods([
    { type: 'Phone', value: guardian.phone1 },
    { type: 'Phone', value: guardian.phone2 },
    { type: 'Phone', value: guardian.mobile },
    { type: 'Email', value: guardian.email },
  ]),
  assistInRole: guardian.assistInRole,
});
