import type { ContactMethodEnum, PersonGenderEnum, TeamGenderEnum } from '@this/constants/enums';

export interface IContactMethod {
  type: ContactMethodEnum;
  value: string;
}

export interface IOfficial {
  initials: string;
  firstName: string;
  lastName: string;
  gender: PersonGenderEnum;
  contactMethods: IContactMethod[];
}

export interface IRoleOfficialPair {
  role: string;
  official: IOfficial;
}

export interface IState {
  code: string;
  ageGroupCode: string;
  name: string;
  teamGender: TeamGenderEnum;
  officials: IRoleOfficialPair[];
}

export interface IPreloadResponse {
  state: IState;
}
