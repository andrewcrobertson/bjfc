import split from 'lodash/split';

export const sanitiseSlashDate = (date: string) => {
  if ((date ?? '') === '') {
    return null;
  }

  const [day, month, year] = split(date, '/');
  if ((day ?? null) === null || (month ?? null) === null || (year ?? null) === null) {
    return null;
  }

  return `${year}-${month}-${day}`;
};
