import type { PlayerStatusEnum } from '@this/constants/enums';

export interface ITeamPlayer {
  footyWebNumber: string;
  status: PlayerStatusEnum;
  statusInfo: string;
  initials: string;
  lastName: string;
  firstName: string;
  nextBirthdayInfo: string;
  gender: string;
}

export interface IState {
  startDate: string;
  endDate: string;
  players: ITeamPlayer[];
}

export interface IPreloadResponse {
  state: IState;
}
