import type { IPersonName } from '@this/types/common';
import compact from 'lodash/compact';
import isString from 'lodash/isString';
import join from 'lodash/join';

export const getName = (name: string | IPersonName) => {
  if (name === null) {
    return null;
  }

  if (isString(name)) {
    return name;
  }

  return join(compact([(name as IPersonName).first, (name as IPersonName).last]), ' ');
};
