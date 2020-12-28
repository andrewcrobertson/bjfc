import type { PlayerStatusEnum } from '@this/scripts/constants/enums';

export interface IStatePlayer {
  footyWebNumber: string;
  status: PlayerStatusEnum;
  statusInfo: string;
  initials: string;
  lastName: string;
  firstName: string;
  nextBirthdayInfo: string;
  gender: string;
}

export interface IBirthdaysByMonth {
  month: string;
  players: IStatePlayer[];
}

export interface IState {
  birthdaysByMonth: IBirthdaysByMonth[];
}

export interface IPreloadResponse {
  state: IState;
}
