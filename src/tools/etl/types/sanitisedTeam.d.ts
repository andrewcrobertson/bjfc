import type { PersonGenderEnum, TeamGenderEnum } from '@this/constants/enums';

export interface ISanitisedOfficial {
  initials: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
}

export interface ISanitisedTeam {
  code: string;
  ageGroupCode: string;
  name: string;
  birthYears: number[];
  playerGenders: PersonGenderEnum[];
  teamGender: TeamGenderEnum;
  headCoach: ISanitisedOfficial;
  assistantCoach: ISanitisedOfficial;
  trainer: ISanitisedOfficial;
  teamManager: ISanitisedOfficial;
}
