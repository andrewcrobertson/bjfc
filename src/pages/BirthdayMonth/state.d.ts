import type { PlayerStatusEnum } from '@this/scripts/constants/enums';

export interface IStatePlayer {
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
  month: number;
  monthName: string;
  players: IStatePlayer[];
}

export interface IPreloadResponse {
  state: IState;
}
