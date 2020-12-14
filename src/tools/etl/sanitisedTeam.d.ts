import type { TeamGenderEnum } from '@this/constants/enums';

export interface ISanitisedOfficial {
  initials: string;
  firstName: string;
  familyName: string;
  phone: string;
  email: string;
}

export interface ISanitisedTeam {
  code: string;
  ageGroupCode: string;
  name: string;
  birthYears: number[];
  playerGenders: PlayerGenderEnum[];
  teamGender: TeamGenderEnum;
  headCoach: ISanitisedOfficial;
  assistantCoach: ISanitisedOfficial;
  trainer: ISanitisedOfficial;
  teamManager: ISanitisedOfficial;
}
