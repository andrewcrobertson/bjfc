import first from 'lodash/first';
import join from 'lodash/join';
import map from 'lodash/map';
import split from 'lodash/split';

export const toInitials = (text: string) => {
  const tokens = split(text, ' ');
  return join(
    map(tokens, (t) => first(t)),
    ''
  ).toUpperCase();
};
