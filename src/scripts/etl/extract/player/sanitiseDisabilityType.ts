import includes from 'lodash/includes';
import { sanitiseString } from '../utility/sanitiseString';

const no = [null, 'Participant does not have any other disabilities'];

export const sanitiseDisabilityType = (value: string) => {
  const sanitisedString = sanitiseString(value);
  return includes(no, sanitisedString) ? null : sanitisedString;
};
