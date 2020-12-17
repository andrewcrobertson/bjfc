export type IRawPlayerGenderEnum = 'Male' | 'Female';

export interface IRawPlayerGuardian {
  lastName: string;
  firstName: string;
  phone1: string;
  phone2: string;
  mobile: string;
  email: string;
  assistInRole: string;
}

export interface IRawPlayerEmergencyContact {
  relationship: string;
  name: string;
  phone1: string;
  phone2: string;
}

export interface IRawPlayerRegisteredContact {
  phoneHome: string;
  phoneWork: string;
  phoneMobile: string;
  email1: string;
  email2: string;
  assistanceRole1: string;
  assistanceRole2: string;
  assistanceRole3: string;
}

export interface IRawPlayerTransaction {
  transactionDate: string;
  transactionTime: string;
  product: string;
  lineItemTotal: string;
  transactionStatus: string;
}

export interface IRawPlayerTransfer {
  transferYear: string;
  applicationDate: string;
  finalisedDate: string;
  sourceClub: string;
  destinationClub: string;
}

export interface IRawPlayer {
  footyWebNumber: string;
  activeRecord: boolean;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  gender: IRawPlayerGenderEnum;
  guardians: IRawPlayerGuardian[];
  emergencyContact: IRawPlayerEmergencyContact;
  contact: IRawPlayerRegisteredContact;
  transactions: IRawPlayerTransaction[];
  transfers: IRawPlayerTransfer[];
  disability: boolean;
  disabilityType1: string;
  disabilityType2: string;
  disabilityNote1: string;
  disabilityNote2: string;
}
