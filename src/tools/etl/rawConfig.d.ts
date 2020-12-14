import type { PlayerGenderEnum } from '@this/constants/enums';

export interface IRawConfigOfficial {
  firstName: string;
  familyName: string;
  phone: string;
  email: string;
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
  registeredLastSeason: string[];
  registeredThisSeason: string[];
  teams: IRawConfigTeam[];
}