export interface IRawConfigClubMap {
  from: string;
  to: string;
}

export interface IRawConfigNoContact {
  footyWebNumber: string;
}

export interface IRawConfigPlayerTeamExceptions {
  code: string;
  footyWebNumber: string;
}

export interface IRawConfig {
  seasonYear: number;
  clubMap: IRawConfigClubMap[];
  noContact: IRawConfigNoContact[];
  playerTeamExceptions: IRawConfigPlayerTeamExceptions[];
}
