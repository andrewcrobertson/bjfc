import type { PersonGenderEnum, TeamGenderEnum } from '@this/constants/enums';
import type { ISanitisedContactMethod } from './sanitisedCommon';

export interface ISanitisedOfficial {
  initials: string;
  firstName: string;
  lastName: string;
  contactMethods: ISanitisedContactMethod[];
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
