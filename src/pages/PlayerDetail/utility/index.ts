import type { Preload, PreloadContext } from '@sapper/common';
import config from '@this/data/config';
import playersRaw from '@this/data/players';
import teamsRaw from '@this/data/teams';
import transactionsRaw from '@this/data/transactions';
import { birthdayInfo } from '@this/utility/birthdayInfo';
import { getStatusInfo } from '@this/utility/getStatusInfo';
import filter from 'lodash/filter';
import find from 'lodash/find';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import type { IPreloadResponse } from '../state';
import { mapContact } from './mapContact';

export const preload = (_context: PreloadContext.PreloadContext) => (page: Preload.Page, _session: any): IPreloadResponse => {
  const player = find(playersRaw, ({ footyWebNumber }) => footyWebNumber === page.params.code);
  const team = find(teamsRaw, ({ code }) => code === player.teamCode);
  const transactionsAll = filter(transactionsRaw, ({ footyWebNumber }) => footyWebNumber === player.footyWebNumber);
  const transactionsRecent = filter(transactionsAll, ({ date }) => parseInt(date.substring(0, 4)) >= config.seasonYear - 1);
  const transactions = map(transactionsRecent, ({ date, product, total, status }) => ({
    date,
    year: parseInt(product.substring(2, 4)),
    product,
    total,
    status,
  }));
  const maxContactMethods = Math.max(...map(player.contacts, ({ contactMethods }) => contactMethods.length));

  const state = {
    footyWebNumber: player.footyWebNumber,
    initials: player.initials,
    lastName: player.lastName,
    firstName: player.firstName,
    dateOfBirth: birthdayInfo(player.dateOfBirth),
    club: player.club,
    status: player.status,
    statusInfo: getStatusInfo(player),
    gender: player.gender,
    disability: player.disability,
    contacts: map(player.contacts, (c) => mapContact(c, maxContactMethods)),
    transactions: orderBy(transactions, ['date', 'product', 'status'], ['desc']),
    clubHistory: orderBy(player.clubHistory, ['date'], ['desc']),
    team: {
      code: team.code,
      ageGroupCode: team.ageGroupCode,
      name: team.name,
      teamGender: team.teamGender,
    },
  };

  return { state };
};
