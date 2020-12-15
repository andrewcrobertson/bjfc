import split from 'lodash/split';
import { sanitiseSlashDate } from './sanitiseSlashDate';

export const sanitiseSlashDateTime = (dateTime: string) => {
  if ((dateTime ?? '') === '') {
    return { date: null, time: null };
  }

  const [date, time] = split(dateTime, ' ');
  return { date: sanitiseSlashDate(date), time };
};
