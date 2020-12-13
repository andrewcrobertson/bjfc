import split from 'lodash/split';

export const parseStandardDate = (date: string) => {
  if (date === '') {
    return null;
  }

  const [day, month, year] = split(date, '/');
  return `${year}-${month}-${day}`;
};
