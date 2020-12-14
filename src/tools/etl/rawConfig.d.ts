import type { PlayerGenderEnum } from '@this/constants/enums';

export interface IOfficial {
  firstName: string;
  familyName: string;
  phone: string;
  email: string;
}

export interface ITeam {
  code: string;
  name: string;
  ages: number[];
  genders: PlayerGenderEnum[];
  headCoach: IOfficial;
  assistantCoach: IOfficial;
  trainer: IOfficial;
  teamManager: IOfficial;
}

export interface IConfig {
  registeredLastSeason: string[];
  registeredThisSeason: string[];
  teams: ITeam[];
}
