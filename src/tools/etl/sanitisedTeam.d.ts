import type { TeamGenderEnum } from '@this/constants/enums';

export interface IRawConfigOfficial {
  firstName: string;
  familyName: string;
  phone: string;
  email: string;
}

export interface ISanitisedTeam {
  code: string;
  name: string;
  birthYears: number[];
  gender: TeamGenderEnum;
  headCoach: IRawConfigOfficial;
  assistantCoach: IRawConfigOfficial;
  trainer: IRawConfigOfficial;
  teamManager: IRawConfigOfficial;
}
