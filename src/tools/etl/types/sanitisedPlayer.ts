import type { ContactMethodEnum, PlayerStatusEnum } from '@this/constants/enums';

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

export interface ISanitisedPlayerTransaction {
  transactionDate: string;
  transactionTime: string;
  product: string;
  lineItemTotal: string;
  transactionStatus: string;
}

export interface ISanitisedPlayerTransfer {
  transferYear: string;
  applicationDate: string;
  finalisedDate: string;
  sourceClub: string;
  destinationClub: string;
}

export interface ISanitisedPlayer {
  footyWebNumber: string;
  status: PlayerStatusEnum;
  initials: string;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  yearOfBirth: number;
  gender: string;
  guardians: ISanitisedPlayerGuardian[];
  emergencyContact: ISanitisedPlayerEmergencyContact;
  contact: ISanitisedPlayerContact;
  transactions: ISanitisedPlayerTransaction[];
  firstTransactionDate: string;
  lastTransactionDate: string;
  transfers: ISanitisedPlayerTransfer[];
  lastTransferDate: string;
  club: string;
  teamCode: string;
  disability: string;
  disabilityNotes: string;
}
