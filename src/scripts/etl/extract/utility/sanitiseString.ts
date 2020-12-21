import trim from 'lodash/trim';

export const sanitiseString = (value: string) => {
  const trimmedValue = trim(value);
  return trimmedValue === '' ? null : trimmedValue;
};
