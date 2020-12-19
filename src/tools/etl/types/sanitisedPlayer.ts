import type { PersonGenderEnum, PlayerStatusEnum } from '@this/constants/enums';
import type { ISanitisedContactMethod } from './sanitisedCommon';

export interface ISanitisedPlayerGuardian {
  lastName: string;
  firstName: string;
  gender: PersonGenderEnum;
  initials: string;
  contactMethods: ISanitisedContactMethod[];
  assistInRole: string;
}

export interface ISanitisedPlayerEmergencyContact {
  relationship: string;
  name: string;
  initials: string;
  gender: PersonGenderEnum;
  contactMethods: ISanitisedContactMethod[];
}

export interface ISanitisedPlayerRegisteredContact {
  gender: PersonGenderEnum;
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
  guardians: ISanitisedPlayerGuardian[];
  emergencyContact: ISanitisedPlayerEmergencyContact;
  registeredContact: ISanitisedPlayerRegisteredContact;
  club: string;
  clubHistory: ISanitisedClubRecord[];
  lastTransferDate: string;
  lastTransactionDate: string;
  teamCode: string;
  disability: ISanitisedPlayerDisability;
}
