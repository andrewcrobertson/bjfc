import includes from 'lodash/includes';
import { sanitiseString } from '../utility/sanitiseString';

const no = [null, 'No, thanks', 'Do not wish to disclose', 'No thank you'];

export const sanitiseAssistInRole = (value: string) => {
  const sanitisedString = sanitiseString(value);
  return includes(no, sanitisedString) ? null : sanitisedString;
};
