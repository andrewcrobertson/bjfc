import type { PersonGenderEnum, TeamGenderEnum } from '@this/constants/enums';
import type { ISanitisedContactMethod } from './common';

export interface ITeamOfficial {
  initials: string;
  firstName: string;
  lastName: string;
  contactMethods: ISanitisedContactMethod[];
  gender: string;
}

export interface ITeam {
  code: string;
  ageGroupCode: string;
  name: string;
  birthYears: number[];
  playerGenders: PersonGenderEnum[];
  teamGender: TeamGenderEnum;
  headCoach: ITeamOfficial;
  assistantCoach: ITeamOfficial;
  trainer: ITeamOfficial;
  teamManager: ITeamOfficial;
}
