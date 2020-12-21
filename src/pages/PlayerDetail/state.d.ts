import type { ContactMethodEnum } from '@this/constants/enums';

export interface IContactMethod {
  type: ContactMethodEnum;
  value: string;
}

export interface IPersonName {
  last: string;
  first: string;
}

export interface IDisability {
  type: string;
  notes: string;
}

export interface IContact {
  type: string;
  relationship: string;
  name: string | IPersonName;
  gender: string;
  initials: string;
  contactMethods: IContactMethod[];
  assistInRole: string;
}

export interface ITransaction {
  footyWebNumber: string;
  date: string;
  time: string;
  product: string;
  total: string;
  status: string;
}

export interface IClubHistoryRecord {
  club: string;
  date: string;
}

export interface ITeam {
  code: string;
  ageGroupCode: string;
  name: string;
  teamGender: string;
}

export interface IState {
  footyWebNumber: string;
  initials: string;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  club: string;
  gender: string;
  disability: IDisability;
  contacts: IContact[];
  transactions: ITransaction[];
  clubHistory: IClubHistoryRecord[];
  team: ITeam;
}

export interface IPreloadResponse {
  state: IState;
}
