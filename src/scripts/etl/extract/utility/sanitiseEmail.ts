import { sanitiseString } from './sanitiseString';

export const sanitiseEmail = (value: string) => {
  const sanitisedString = sanitiseString(value);
  return sanitisedString === null ? null : sanitisedString.toLowerCase();
};
