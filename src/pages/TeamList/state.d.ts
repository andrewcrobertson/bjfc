import type { TeamGenderEnum } from '@this/common/constants/enums';

export interface IRole {
  name: string;
  filled: boolean;
}

export interface ITeamInfo {
  code: string;
  ageGroupCode: string;
  name: string;
  teamGender: TeamGenderEnum;
  roles: IRole[];
  totalCount: number;
  insuredCount: number;
  registeredCount: number;
}

export interface IState {
  teams: ITeamInfo[];
}

export interface IPreloadResponse {
  state: IState;
}
