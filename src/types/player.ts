import type { PersonGenderEnum, PlayerContactTypeEnum, PlayerStatusEnum } from '@this/constants/enums';
import type { IPersonName, ISanitisedContactMethod } from './common';

export interface IPlayerContact {
  type: PlayerContactTypeEnum;
  relationship: string;
  name: string | IPersonName;
  gender: PersonGenderEnum;
  initials: string;
  contactMethods: ISanitisedContactMethod[];
  assistInRole: string;
}

export interface IPlayerClubRecord {
  date: string;
  club: string;
}

export interface IPlayerDisability {
  type: string;
  notes: string;
}

export interface IPlayer {
  footyWebNumber: string;
  initials: string;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  status: PlayerStatusEnum;
  gender: PersonGenderEnum;
  contacts: IPlayerContact[];
  club: string;
  clubHistory: IPlayerClubRecord[];
  lastTransferDate: string;
  lastTransactionDate: string;
  teamCode: string;
  disability: IPlayerDisability;
}
