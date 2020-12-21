import type { PersonGenderEnum } from '@this/constants/enums';

export interface IRawPlayerGuardian {
  lastName: string;
  firstName: string;
  gender: PersonGenderEnum;
  phone1: string;
  phone2: string;
  mobile: string;
  email: string;
  assistInRole: string;
}

export interface IRawPlayerEmergencyContact {
  relationship: string;
  name: string;
  gender: PersonGenderEnum;
  phone1: string;
  phone2: string;
}

export interface IRawPlayerRegisteredContact {
  gender: PersonGenderEnum;
  phoneHome: string;
  phoneWork: string;
  phoneMobile: string;
  email1: string;
  email2: string;
  assistInRole1: string;
  assistInRole2: string;
  assistInRole3: string;
}

export interface IRawPlayerDisability {
  type1: string;
  type2: string;
  note1: string;
  note2: string;
}

export interface IRawPlayer {
  footyWebNumber: string;
  activeRecord: boolean;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  gender: PersonGenderEnum;
  guardians: IRawPlayerGuardian[];
  emergencyContact: IRawPlayerEmergencyContact;
  registeredContact: IRawPlayerRegisteredContact;
  disability: IRawPlayerDisability;
}
