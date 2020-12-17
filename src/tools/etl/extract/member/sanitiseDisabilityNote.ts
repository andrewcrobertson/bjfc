import includes from 'lodash/includes';
import { sanitiseString } from '../utility/sanitiseString';

const no = [null, 'none'];

export const sanitiseDisabilityNote = (value: string) => {
  const sanitisedString = sanitiseString(value);
  return includes(no, sanitisedString) ? null : sanitisedString;
};
