import type { ContactMethodEnum } from '@this/utility/constants/enums';

export interface IContactMethod {
  type: ContactMethodEnum;
  value: string;
}

export interface IMember {
  role: string;
  initials: string;
  firstName: string;
  lastName: string;
  gender: string;
  contactMethods: IContactMethod[];
}

export interface IState {
  committeeList: IMember[];
}

export interface IPreloadResponse {
  state: IState;
}
