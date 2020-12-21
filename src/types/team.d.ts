import type { PersonGenderEnum, TeamGenderEnum } from '@this/constants/enums';
import type { IContactMethod } from './common';

export interface ITeamOfficial {
  initials: string;
  firstName: string;
  lastName: string;
  contactMethods: IContactMethod[];
  gender: PersonGenderEnum;
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
