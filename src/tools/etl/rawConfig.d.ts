import type { PersonGenderEnum } from '@this/constants/enums';

export interface IRawMap {
  from: string;
  to: string;
}

export interface IRawConfigOfficial {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
}

export interface IRawConfigCommittee {
  role: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
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
  genders: PersonGenderEnum[];
  headCoach: IRawConfigOfficial;
  assistantCoach: IRawConfigOfficial;
  trainer: IRawConfigOfficial;
  teamManager: IRawConfigOfficial;
}

export interface IRawConfig {
  seasonYear: number;
  registeredRecently: string[];
  registeredThisSeason: string[];
  clubMap: IRawMap[];
  productMap: IRawMap[];
  noContact: IRawConfigNoContact[];
  playerTeamExceptions: IRawConfigPlayerTeamExceptions[];
  teams: IRawConfigTeam[];
  committee: IRawConfigCommittee[];
}
