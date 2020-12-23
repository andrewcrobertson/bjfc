import { differenceInYears, parseISO } from 'date-fns';

export const birthdayInfo = (dateOfBirth: string) => {
  const age = differenceInYears(new Date(), parseISO(dateOfBirth));
  return `${dateOfBirth} (${age}yo)`;
};
