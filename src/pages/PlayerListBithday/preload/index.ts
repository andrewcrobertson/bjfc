import type { Preload, PreloadContext } from '@sapper/common';
import playersRaw from '@this/data/players';
import add from 'date-fns/add';
import format from 'date-fns/format';
import startOfMonth from 'date-fns/startOfMonth';
import filter from 'lodash/filter';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import type { IPreloadResponse } from '../state';
import { mapPlayer } from './mapPlayer';

const getBirthdayAfter = (dateOfBirth: string, date: string) => {
  const year = parseInt(date.substring(0, 4));
  const dateOfBirth1 = year.toString() + dateOfBirth.substring(4);
  return dateOfBirth1 > date ? dateOfBirth1 : (year + 1).toString() + dateOfBirth.substring(4);
};

export const preload = (_context: PreloadContext.PreloadContext) => (page: Preload.Page, _session: any): IPreloadResponse => {
  const startDate = startOfMonth(new Date());
  const endDate = add(startDate, { months: 12 });
  const startDateStr = format(startDate, 'yyyy-MM-dd');
  const endDateStr = format(endDate, 'yyyy-MM-dd');
  const playersActive = filter(playersRaw, ({ status }) => status === 'Insured' || status === 'Registered' || status === 'Recent');
  const playersWith = map(playersActive, (playersRaw) => ({ ...playersRaw, nextBirthday: getBirthdayAfter(playersRaw.dateOfBirth, startDateStr) }));
  const playersBirthdays = orderBy(
    filter(playersWith, ({ nextBirthday }) => nextBirthday >= startDateStr && nextBirthday <= endDateStr),
    ['nextBirthday', 'lastName', 'firstName']
  );
  const state = { startDate: startDateStr, endDate: endDateStr, players: map(playersBirthdays, (p) => mapPlayer(p, p.nextBirthday)) };
  return { state };
};
