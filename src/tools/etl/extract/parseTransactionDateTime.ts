import split from 'lodash/split';
import { parseStandardDate } from './parseStandardDate';

export const parseTransactionDateTime = (dateTime: string) => {
  if (dateTime === '') {
    return { date: null, time: null };
  }

  const [date, time] = split(dateTime, ' ');
  return { date: parseStandardDate(date), time };
};
