import type { PlayerStatusEnum } from '@this/utility/constants/enums';

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
  playersTransferred: ITeamPlayer[];
  playersHistorical: ITeamPlayer[];
}

export interface IPreloadResponse {
  state: IState;
}
