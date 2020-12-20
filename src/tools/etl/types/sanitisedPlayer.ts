import type { PersonGenderEnum, PlayerContactTypeEnum, PlayerStatusEnum } from '@this/constants/enums';
import type { ISanitisedContactMethod } from './sanitisedCommon';

export interface IPersonName {
  last: string;
  first: string;
}

export interface ISanitisedPlayerContact {
  type: PlayerContactTypeEnum;
  relationship: string;
  name: string | IPersonName;
  gender: PersonGenderEnum;
  initials: string;
  contactMethods: ISanitisedContactMethod[];
  assistInRole: string;
}

export interface ISanitisedClubRecord {
  date: string;
  club: string;
}

export interface ISanitisedPlayerDisability {
  type: string;
  notes: string;
}

export interface ISanitisedPlayer {
  footyWebNumber: string;
  initials: string;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  status: PlayerStatusEnum;
  gender: PersonGenderEnum;
  contacts: ISanitisedPlayerContact[];
  club: string;
  clubHistory: ISanitisedClubRecord[];
  lastTransferDate: string;
  lastTransactionDate: string;
  teamCode: string;
  disability: ISanitisedPlayerDisability;
}
