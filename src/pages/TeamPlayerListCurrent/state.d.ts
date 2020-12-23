import type { PlayerStatusEnum } from '@this/constants/enums';

export interface ITeamPlayer {
  footyWebNumber: string;
  status: PlayerStatusEnum;
  statusInfo: string;
  initials: string;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  gender: string;
}

export interface IState {
  code: string;
  name: string;
  ageGroupCode: string;
  teamGender: string;
  playersActive: ITeamPlayer[];
  playersRecent: ITeamPlayer[];
}

export interface IPreloadResponse {
  state: IState;
}
