import type { ContactMethodEnum } from '@this/constants/enums';

export interface IPersonName {
  last: string;
  first: string;
}

export interface IContactMethod {
  type: ContactMethodEnum;
  value: string;
}
