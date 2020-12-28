import { differenceInYears, parseISO } from 'date-fns';
import { getNextBirthday } from './getNextBirthday';

const suffix = {
  '1': 'st',
  '2': 'nd',
  '3': 'rd',
};

export const getNextBirthdayInfo = (dateOfBirth: string) => {
  const nextBirthday = getNextBirthday(dateOfBirth);
  const age = differenceInYears(parseISO(nextBirthday), parseISO(dateOfBirth));
  return `${age}${suffix[age] ?? 'th'} birthday on ${nextBirthday}`;
};
