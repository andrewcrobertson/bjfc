import format from 'date-fns/format';
import filter from 'lodash/filter';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import type { IBirthdaysByMonth } from '../../state';
import type { IPlayerDb } from '../dataAccess/getPlayers';
import { toPlayer } from '../mappers/toPlayer';

// TODO: Fix
const config = { seasonYear: 2021 };
const getBirthdayAfter = (dateOfBirth: string, date: string) => {
  const year = parseInt(date.substring(0, 4));
  const dateOfBirth1 = year.toString() + dateOfBirth.substring(4);
  return dateOfBirth1 > date ? dateOfBirth1 : (year + 1).toString() + dateOfBirth.substring(4);
};

export const toBirthdaysByMonth = (month: number, players: IPlayerDb[]): IBirthdaysByMonth[] => {
  const monthName = format(new Date(1900, month - 1, 1), 'MMMM');
  const startDate = config.seasonYear.toString() + '-01-01';
  const playersActive = filter(players, ({ dateOfBirth }) => parseInt(dateOfBirth.substring(5, 7)) === month);
  const playersWithNextBirthday = map(playersActive, (playersRaw) => ({ ...playersRaw, nextBirthday: getBirthdayAfter(playersRaw.dateOfBirth, startDate) }));
  const playersBirthdays = orderBy(playersWithNextBirthday, ['nextBirthday', 'lastName', 'firstName']);
  const birthdaysByMonth = [{ month: monthName, players: map(playersBirthdays, (p) => toPlayer(p, p.nextBirthday)) }];
  return birthdaysByMonth;
};
