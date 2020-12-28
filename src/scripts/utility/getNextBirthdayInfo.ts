import { differenceInYears, parseISO } from 'date-fns';
import { getNextBirthday } from './getNextBirthday';

export const getNextBirthdayInfo = (dateOfBirth: string) => {
  const nextBirthday = getNextBirthday(dateOfBirth);
  const age = differenceInYears(parseISO(nextBirthday), parseISO(dateOfBirth));
  return `Turning ${age} on ${nextBirthday}`;
};
