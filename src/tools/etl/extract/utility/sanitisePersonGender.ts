import type { PersonGenderEnum } from '@this/constants/enums';
import { sanitiseString } from './sanitiseString';

export const sanitisePersonGender = (value: string): PersonGenderEnum => {
  const sanitisedString = sanitiseString(value);
  switch (sanitisedString) {
    case 'Female':
      return 'Female';
    case 'Male':
      return 'Female';
    default:
      return 'Unknown';
  }
};
