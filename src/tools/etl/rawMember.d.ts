export interface IRawMemberGuardian {
  lastName: string;
  firstName: string;
  phone1: string;
  phone2: string;
  mobile: string;
  email: string;
  assistInRole: string;
}

export interface IRawMemberEmergencyContact {
  relationship: string;
  name: string;
  phone1: string;
  phone2: string;
}

export interface IRawMemberContact {
  phoneHome: string;
  phoneWork: string;
  phoneMobile: string;
  email1: string;
  email2: string;
  assistanceRole1: string;
  assistanceRole2: string;
  assistanceRole3: string;
}

export interface IRawMemberTransaction {
  transactionDate: string;
  transactionTime: string;
  product: string;
  lineItemTotal: string;
  transactionStatus: string;
}

export interface IRawMemberTransfer {
  transferYear: string;
  applicationDate: string;
  finalisedDate: string;
  sourceClub: string;
  destinationClub: string;
}

export interface IRawMember {
  footyWebNumber: string;
  activeRecord: boolean;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  gender: string;
  guardians: IRawMemberGuardian[];
  emergencyContact: IRawMemberEmergencyContact;
  contact: IRawMemberContact;
  transactions: IRawMemberTransaction[];
  transfers: IRawMemberTransfer[];
  disability: boolean;
  disabilityType1: string;
  disabilityType2: string;
  disabilityNote1: string;
  disabilityNote2: string;
}
