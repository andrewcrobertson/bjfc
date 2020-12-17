import { PlayerStatusEnum } from '@this/constants/enums';

export interface ISanitisedContactMethod {
  type: string;
  value: string;
}

export interface ISanitisedMemberGuardian {
  lastName: string;
  firstName: string;
  initials: string;
  phone1: string;
  phone2: string;
  mobile: string;
  email: string;
  assistInRole: string;
}

export interface ISanitisedMemberEmergencyContact {
  relationship: string;
  name: string;
  phone1: string;
  phone2: string;
}

export interface ISanitisedMemberContact {
  phone1: string;
  phone2: string;
  email1: string;
  email2: string;
  assistInRole: string;
}

export interface ISanitisedMemberTransaction {
  transactionDate: string;
  transactionTime: string;
  product: string;
  lineItemTotal: string;
  transactionStatus: string;
}

export interface ISanitisedMemberTransfer {
  transferYear: string;
  applicationDate: string;
  finalisedDate: string;
  sourceClub: string;
  destinationClub: string;
}

export interface ISanitisedMember {
  footyWebNumber: string;
  status: PlayerStatusEnum;
  initials: string;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  yearOfBirth: number;
  gender: string;
  guardians: ISanitisedMemberGuardian[];
  emergencyContact: ISanitisedMemberEmergencyContact;
  contact: ISanitisedMemberContact;
  transactions: ISanitisedMemberTransaction[];
  lastTransactionDate: string;
  transfers: ISanitisedMemberTransfer[];
  lastTransferDate: string;
  club: string;
  teamCode: string;
  disability: string;
  disabilityNotes: string;
}
