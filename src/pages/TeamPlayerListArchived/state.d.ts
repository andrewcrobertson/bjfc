export interface ITeamPlayerTransferred {
  footyWebNumber: string;
  initials: string;
  lastName: string;
  firstName: string;
  gender: string;
  club: string;
  lastTransferDate: string;
}

export interface IPlayersArchived {
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
  playersArchived: IPlayersArchived[];
}

export interface IPreloadResponse {
  state: IState;
}
