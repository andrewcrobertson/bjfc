import type { PlayerStatusEnum } from '@this/constants/enums';

export interface ITeamPlayerActive {
  footyWebNumber: string;
  status: PlayerStatusEnum;
  initials: string;
  lastName: string;
  firstName: string;
  gender: string;
}

export interface ITeamPlayerRecent {
  footyWebNumber: string;
  initials: string;
  lastName: string;
  firstName: string;
  gender: string;
  lastTransactionDate: string;
}

export interface IState {
  code: string;
  name: string;
  ageGroupCode: string;
  teamGender: string;
  playersActive: ITeamPlayerActive[];
  playersRecent: ITeamPlayerRecent[];
}

export interface IPreloadResponse {
  state: IState;
}
