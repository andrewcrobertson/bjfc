import first from 'lodash/first';
import join from 'lodash/join';
import map from 'lodash/map';
import replace from 'lodash/replace';
import split from 'lodash/split';

export const toInitials = (firstName: string, lastName: string) => {
  const tokens = [firstName, ...split(replace(lastName, '-', ' '), ' ')];
  return join(
    map(tokens, (t) => first(t)),
    ''
  ).toUpperCase();
};
