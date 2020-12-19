import type { ContactMethodEnum } from '@this/constants/enums';

export interface ISanitisedContactMethod {
  type: ContactMethodEnum;
  value: string;
}
