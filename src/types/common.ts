import type { ContactMethodEnum } from '@this/constants/enums';

export interface IPersonName {
  last: string;
  first: string;
}

export interface ISanitisedContactMethod {
  type: ContactMethodEnum;
  value: string;
}
