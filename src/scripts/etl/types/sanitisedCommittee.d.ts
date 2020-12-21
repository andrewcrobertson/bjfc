import type { PersonGenderEnum } from '@this/constants/enums';
import type { ISanitisedContactMethod } from './sanitisedCommon';

export interface ISanitisedCommittee {
  role: string;
  initials: string;
  firstName: string;
  lastName: string;
  gender: PersonGenderEnum;
  contactMethods: ISanitisedContactMethod[];
}
