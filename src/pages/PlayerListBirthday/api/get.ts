import { getDatabase } from '@this/scripts/utility/getDatabase';
import format from 'date-fns/format';
import filter from 'lodash/filter';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import type { Request } from 'polka';
import type { IState } from '../state';
import { getPlayers } from './utility/dataAccess/getPlayers';
import { toPlayer } from './utility/mappers/toPlayer';

// TODO: Fix
const config = { seasonYear: 2021 };
const getBirthdayAfter = (dateOfBirth: string, date: string) => {
  const year = parseInt(date.substring(0, 4));
  const dateOfBirth1 = year.toString() + dateOfBirth.substring(4);
  return dateOfBirth1 > date ? dateOfBirth1 : (year + 1).toString() + dateOfBirth.substring(4);
};

export const get = async (req: Request): Promise<IState> => {
  const month = parseInt(req.params.month);

  const db = getDatabase();
  const playersDb = getPlayers(db, month);

  const monthName = format(new Date(1900, month - 1, 1), 'MMMM');
  const startDate = config.seasonYear.toString() + '-01-01';
  const playersActive = filter(playersDb, ({ dateOfBirth }) => parseInt(dateOfBirth.substring(5, 7)) === month);
  const playersWithNextBirthday = map(playersActive, (playersRaw) => ({ ...playersRaw, nextBirthday: getBirthdayAfter(playersRaw.dateOfBirth, startDate) }));
  const playersBirthdays = orderBy(playersWithNextBirthday, ['nextBirthday', 'lastName', 'firstName']);
  const birthdaysByMonth = [{ month: monthName, players: map(playersBirthdays, (p) => toPlayer(p, p.nextBirthday)) }];
  return { birthdaysByMonth };
};
