import type { PersonGenderEnum } from '@this/utility/constants/enums';
import type { IContactMethod } from './common';

export interface ICommitteeMember {
  role: string;
  initials: string;
  firstName: string;
  lastName: string;
  gender: PersonGenderEnum;
  contactMethods: IContactMethod[];
}
