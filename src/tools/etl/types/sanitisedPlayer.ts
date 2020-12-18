import type { ContactMethodEnum, PersonGenderEnum, PlayerStatusEnum } from '@this/constants/enums';

export interface ISanitisedContactMethod {
  type: ContactMethodEnum;
  value: string;
}

export interface ISanitisedPlayerGuardian {
  lastName: string;
  firstName: string;
  initials: string;
  phone1: string;
  phone2: string;
  mobile: string;
  email: string;
  assistInRole: string;
}

export interface ISanitisedPlayerEmergencyContact {
  relationship: string;
  name: string;
  phone1: string;
  phone2: string;
}

export interface ISanitisedPlayerContact {
  phone1: string;
  phone2: string;
  phone3: string;
  email1: string;
  email2: string;
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
  contact: ISanitisedPlayerContact;
  club: string;
  clubHistory: ISanitisedClubRecord[];
  lastTransferDate: string;
  lastTransactionDate: string;
  teamCode: string;
  disability: ISanitisedPlayerDisability;
}
