import type { ISanitisedPlayerContact } from '../../../../types/sanitisedPlayer';
import type { IRawPlayerGuardian } from '../../types/rawPlayer';
import { toContactMethods } from '../utility/toContactMethods';
import { toInitials } from '../utility/toInitials';

export const toContactGuardian = (guardian: IRawPlayerGuardian): ISanitisedPlayerContact => ({
  type: 'Guardian',
  relationship: null,
  name: {
    last: guardian.lastName,
    first: guardian.firstName,
  },
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
