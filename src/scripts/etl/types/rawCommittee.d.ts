import type { PersonGenderEnum } from '@this/constants/enums';

export interface IRawCommittee {
  role: string;
  firstName: string;
  lastName: string;
  gender: PersonGenderEnum;
  phone: string;
  email: string;
}
