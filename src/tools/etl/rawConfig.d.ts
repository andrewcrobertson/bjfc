import type { PlayerGenderEnum } from '@this/constants/enums';

export interface IRawConfigOfficial {
  firstName: string;
  familyName: string;
  phone: string;
  email: string;
}

export interface IRawConfigNoContact {
  footyWebNumber: string;
}

export interface IRawConfigPlayerTeamExceptions {
  code: string;
  footyWebNumber: string;
}

export interface IRawConfigTeam {
  code: string;
  name: string;
  ages: number[];
  genders: PlayerGenderEnum[];
  headCoach: IRawConfigOfficial;
  assistantCoach: IRawConfigOfficial;
  trainer: IRawConfigOfficial;
  teamManager: IRawConfigOfficial;
}

export interface IRawConfig {
  seasonYear: number;
  registeredLastSeason: string[];
  registeredThisSeason: string[];
  noContact: IRawConfigNoContact[];
  playerTeamExceptions: IRawConfigPlayerTeamExceptions[];
  teams: IRawConfigTeam[];
}
