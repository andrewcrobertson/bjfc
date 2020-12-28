import type { PlayerStatusEnum } from '@this/utility/constants/enums';

export interface IPlayer {
  footyWebNumber: string;
  status: PlayerStatusEnum;
  statusInfo: string;
  initials: string;
  lastName: string;
  firstName: string;
  gender: string;
  guardians: string;
  searchTerms: string;
}

export interface IState {
  players: IPlayer[];
}

export interface IPreloadResponse {
  state: IState;
}
