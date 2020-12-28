import type { ContactMethodEnum, PlayerContactTypeEnum, PlayerStatusEnum } from '@this/scripts/constants/enums';

export interface IContactMethod {
  type: ContactMethodEnum;
  value: string;
}

export interface IDisability {
  type: string;
  notes: string;
}

export interface IContact {
  type: PlayerContactTypeEnum;
  relationship: string;
  name: string;
  gender: string;
  initials: string;
  contactMethods: IContactMethod[];
}

export interface ITransaction {
  date: string;
  year: number;
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
  status: PlayerStatusEnum;
  statusInfo: string;
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
