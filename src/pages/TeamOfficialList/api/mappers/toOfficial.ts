import { toInitials } from '@this/scripts/utility/toInitials';
import type { IOfficial } from '../../state';
import type { IOfficialDb } from '../dataAccess/getOfficials';
import { toContactMethods } from './toContactMethods';

export const toOfficial = (official: IOfficialDb): IOfficial =>
  official === null
    ? null
    : {
        initials: toInitials(`${official.firstName}, ${official.lastName}`),
        firstName: official.firstName,
        lastName: official.lastName,
        gender: official.gender,
        contactMethods: toContactMethods([
          { type: 'Phone', value: official.phone },
          { type: 'Email', value: official.email },
        ]),
      };
