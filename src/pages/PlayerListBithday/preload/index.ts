import type { Preload, PreloadContext } from '@sapper/common';
import config from '@this/data/config';
import playersRaw from '@this/data/players';
import format from 'date-fns/format';
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
  const month = parseInt(page.params.month);
  const monthName = format(new Date(1900, month - 1, 1), 'MMMM');
  const startDate = config.seasonYear.toString() + '-01-01';
  const playersActive = filter(
    playersRaw,
    ({ dateOfBirth, status }) => parseInt(dateOfBirth.substring(5, 7)) === month && (status === 'Insured' || status === 'Registered' || status === 'Recent')
  );
  const playersWithNextBirthday = map(playersActive, (playersRaw) => ({ ...playersRaw, nextBirthday: getBirthdayAfter(playersRaw.dateOfBirth, startDate) }));
  const playersBirthdays = orderBy(playersWithNextBirthday, ['nextBirthday', 'lastName', 'firstName']);
  const birthdaysByMonth = [{ month: monthName, players: map(playersBirthdays, (p) => mapPlayer(p, p.nextBirthday)) }];
  const state = { birthdaysByMonth };
  return { state };
};
