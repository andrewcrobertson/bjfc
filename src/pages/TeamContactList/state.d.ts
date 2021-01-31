import type { PlayerStatusEnum } from '@this/scripts/constants/enums';

export interface IContactMethod {
  type: ContactMethodEnum;
  value: string;
}

export interface IContact {
  type: PlayerContactTypeEnum;
  relationship: string;
  name: string;
  gender: string;
  initials: string;
  contactMethods: IContactMethod[];
}

export interface ITeamPlayer {
  footyWebNumber: string;
  status: PlayerStatusEnum;
  statusInfo: string;
  initials: string;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  gender: string;
  contacts: IContact[];
}

export interface IState {
  code: string;
  name: string;
  ageGroupCode: string;
  teamGender: string;
  playersActive: ITeamPlayer[];
  playersRecent: ITeamPlayer[];
  playersHistorical: ITeamPlayer[];
  playersTransferred: ITeamPlayer[];
}

export interface IPreloadResponse {
  state: IState;
}
