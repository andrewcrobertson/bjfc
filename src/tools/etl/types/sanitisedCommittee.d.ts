import type { PersonGenderEnum } from '@this/constants/enums';

export interface ISanitisedCommittee {
  role: string;
  initials: string;
  firstName: string;
  lastName: string;
  gender: PersonGenderEnum;
  phone: string;
  email: string;
}
