import type { PersonGenderEnum } from '@this/constants/enums';
import type { ISanitisedContactMethod } from './common';

export interface ICommitteeMember {
  role: string;
  initials: string;
  firstName: string;
  lastName: string;
  gender: PersonGenderEnum;
  contactMethods: ISanitisedContactMethod[];
}
