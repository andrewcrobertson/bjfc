import trim from 'lodash/trim';

export const nullIfEmptyString = (value: string) => {
  const trimmedValue = trim(value);
  return trimmedValue === '' ? null : trimmedValue;
};
