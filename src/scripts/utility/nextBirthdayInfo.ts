import { differenceInYears, parseISO } from 'date-fns';
import split from 'lodash/split';

const suffix = {
  '1': 'st',
  '2': 'nd',
  '3': 'rd',
};

export const nextBirthdayInfo = (dateOfBirth: string) => {
  const monthRaw = new Date().getMonth() + 1;
  const [year, month, day] = split(dateOfBirth, '-');
  const yearCheck = (new Date().getFullYear() + (parseInt(month) < monthRaw ? 1 : 0)).toString();
  const dateCheck = `${yearCheck}-${month}-${day}`;
  const age = differenceInYears(parseISO(dateCheck), parseISO(dateOfBirth));
  return `${age}${suffix[age] ?? 'th'} birthday on ${dateCheck}`;
};
