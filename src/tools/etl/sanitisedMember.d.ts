export interface ISanitisedContactMethod {
  type: string;
  value: string;
}

export interface ISanitisedMemberGuardian {
  familyName: string;
  firstName: string;
  contacts: ISanitisedContactMethod[];
}

export interface ISanitisedMemberEmergencyContact {
  relationship: string;
  name: string;
  contacts: ISanitisedContactMethod[];
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
  yearOfBirth: number;
  gender: string;
  guardians: ISanitisedMemberGuardian[];
  emergencyContact: ISanitisedMemberEmergencyContact;
  contact: ISanitisedContactMethod[];
  transactions: ISanitisedMemberTransaction[];
  transfers: ISanitisedMemberTransfer[];
  club: string;
  teamCode: string;
  registeredLastSeason: boolean;
  registeredThisSeason: boolean;
  paidThisSeason: boolean;
}
