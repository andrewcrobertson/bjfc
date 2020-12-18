import startsWith from 'lodash/startsWith';
import trim from 'lodash/trim';
import { sanitiseString } from '../utility/sanitiseString';

const archivedPrefix = '(ARCHIVED) -';

export const sanitiseProduct = (value: string) => {
  const sanitisedString = sanitiseString(value);
  if (sanitisedString === null) {
    return null;
  }

  return startsWith(sanitisedString, archivedPrefix) ? trim(sanitisedString.substring(archivedPrefix.length)) : sanitisedString;
};
