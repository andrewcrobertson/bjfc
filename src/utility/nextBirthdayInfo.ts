import { differenceInYears, parseISO } from 'date-fns';

const suffix = {
  '1': 'st',
  '2': 'nd',
  '3': 'rd',
};

export const nextBirthdayInfo = (dateOfBirth: string, dateCheck: string) => {
  const age = differenceInYears(parseISO(dateCheck), parseISO(dateOfBirth));
  return `${age}${suffix[age] ?? 'th'} birthday on ${dateCheck}`;
};
