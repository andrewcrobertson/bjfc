import type { PersonGenderEnum } from '@this/constants/enums';

export interface IRawTeamOfficial {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: PersonGenderEnum;
}

export interface IRawTeam {
  code: string;
  name: string;
  ages: number[];
  genders: PersonGenderEnum[];
  headCoach: IRawTeamOfficial;
  assistantCoach: IRawTeamOfficial;
  trainer: IRawTeamOfficial;
  teamManager: IRawTeamOfficial;
}
