export interface ITeamPlayerTransferred {
  footyWebNumber: string;
  initials: string;
  lastName: string;
  firstName: string;
  gender: string;
  club: string;
  lastTransferDate: string;
}

export interface ITeamPlayersHistorical {
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
  playersTransferred: ITeamPlayerTransferred[];
  playersHistorical: ITeamPlayersHistorical[];
}

export interface IPreloadResponse {
  state: IState;
}
