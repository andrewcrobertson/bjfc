import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseDisability = (value: string) => {
  const sanitisedString = sanitiseString(value);
  return sanitisedString === 'Yes';
};
