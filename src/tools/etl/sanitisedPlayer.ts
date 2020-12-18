import { PlayerStatusEnum } from '@this/constants/enums';

export interface ISanitisedContactMethod {
  type: string;
  value: string;
}

export interface sanitisedPlayerGuardian {
  lastName: string;
  firstName: string;
  initials: string;
  phone1: string;
  phone2: string;
  mobile: string;
  email: string;
  assistInRole: string;
}

export interface sanitisedPlayerEmergencyContact {
  relationship: string;
  name: string;
  phone1: string;
  phone2: string;
}

export interface sanitisedPlayerContact {
  phone1: string;
  phone2: string;
  phone3: string;
  email1: string;
  email2: string;
  assistInRole: string;
}

export interface sanitisedPlayerTransaction {
  transactionDate: string;
  transactionTime: string;
  product: string;
  lineItemTotal: string;
  transactionStatus: string;
}

export interface sanitisedPlayerTransfer {
  transferYear: string;
  applicationDate: string;
  finalisedDate: string;
  sourceClub: string;
  destinationClub: string;
}

export interface sanitisedPlayer {
  footyWebNumber: string;
  status: PlayerStatusEnum;
  initials: string;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  yearOfBirth: number;
  gender: string;
  guardians: sanitisedPlayerGuardian[];
  emergencyContact: sanitisedPlayerEmergencyContact;
  contact: sanitisedPlayerContact;
  transactions: sanitisedPlayerTransaction[];
  firstTransactionDate: string;
  lastTransactionDate: string;
  transfers: sanitisedPlayerTransfer[];
  lastTransferDate: string;
  club: string;
  teamCode: string;
  disability: string;
  disabilityNotes: string;
}
