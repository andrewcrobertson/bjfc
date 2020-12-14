export interface IGuardian {
  familyName: string;
  firstName: string;
  phone1: string;
  phone2: string;
  mobile: string;
  email: string;
}

export interface IEmergencyContact {
  relationship: string;
  name: string;
  phone1: string;
  phone2: string;
}

export interface IContact {
  phoneHome: string;
  phoneWork: string;
  phoneMobile: string;
  email1: string;
  email2: string;
}

export interface ITransaction {
  transactionDate: string;
  transactionTime: string;
  product: string;
  lineItemTotal: string;
  transactionStatus: string;
}

export interface ITransfer {
  transferYear: string;
  applicationDate: string;
  finalisedDate: string;
  sourceClub: string;
  destinationClub: string;
}

export interface IMember {
  footyWebNumber: string;
  activeRecord: boolean;
  familyName: string;
  firstName: string;
  dateOfBirth: string;
  gender: string;
  guardians: IGuardian[];
  emergencyContact: IEmergencyContact;
  contact: IContact;
  transactions: ITransaction[];
  transfers: ITransfer[];
}
