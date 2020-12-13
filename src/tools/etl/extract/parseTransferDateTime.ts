import includes from 'lodash/includes';
import split from 'lodash/split';

export const parseTransferDateTime = (dateTime) => {
  if (dateTime === '') {
    return { date: null, time: null };
  }

  if (includes(dateTime, ' ')) {
    const [date, time] = split(dateTime, ' ');
    const [h, m, s] = split(time, ':');
    return { date, time: `${h}:${m}` };
  }

  return { date: dateTime, time: null };
};
