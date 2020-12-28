import { differenceInYears, parseISO } from 'date-fns';
import { groupBy, orderBy, toPairs } from 'lodash';
import join from 'lodash/join';
import map from 'lodash/map';
import { getNextBirthday } from './getNextBirthday';

export interface IPlayer {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export const xxx = (monthName: string, players: IPlayer[]) => {
  const playersMapped = map(players, ({ firstName, lastName, dateOfBirth }) => {
    const nextBirthday = getNextBirthday(dateOfBirth);
    const age = differenceInYears(parseISO(nextBirthday), parseISO(dateOfBirth));
    const name = `${firstName} ${lastName.substring(0, 1)}.`;
    return { age, name };
  });

  const step1 = map(toPairs(groupBy(playersMapped, 'age')), ([age, values]) => ({ age: parseInt(age), names: map(values, ({ name }) => name) }));
  const step2 = orderBy(step1, ['age']);
  const step3 = map(step2, ({ age, names }) => `Turning ${age}:\r\n - ${join(names, '\r\n - ')}`);
  const step4 = `Many Happy Returns to players having their birthdays in ${monthName}\r\n\r\n` + join(step3, '\r\n\r\n');
  return step4;
};
