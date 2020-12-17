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
  gender: PersonGenderEnum;
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

export interface IRawProducts {
  registeredRecently: string[];
  registeredThisSeason: string[];
  productMap: IRawMap[];
}

export interface IRawConfig {
  seasonYear: number;
  clubMap: IRawMap[];
  noContact: IRawConfigNoContact[];
  playerTeamExceptions: IRawConfigPlayerTeamExceptions[];
}
