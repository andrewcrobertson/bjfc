export interface ISanitisedMemberGuardian {
  familyName: string;
  firstName: string;
  phone1: string;
  phone2: string;
  mobile: string;
  email: string;
}

export interface ISanitisedMemberEmergencyContact {
  relationship: string;
  name: string;
  phone1: string;
  phone2: string;
}

export interface ISanitisedMemberContact {
  phoneHome: string;
  phoneWork: string;
  phoneMobile: string;
  email1: string;
  email2: string;
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
  activeRecord: boolean;
  familyName: string;
  firstName: string;
  dateOfBirth: string;
  gender: string;
  guardians: ISanitisedMemberGuardian[];
  emergencyContact: ISanitisedMemberEmergencyContact;
  contact: ISanitisedMemberContact;
  transactions: ISanitisedMemberTransaction[];
  transfers: ISanitisedMemberTransfer[];
}