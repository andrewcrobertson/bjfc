import type { Preload, PreloadContext } from '@sapper/common';
import playersRaw from '@this/data/players';
import teamsRaw from '@this/data/teams';
import find from 'lodash/find';
import map from 'lodash/map';
import type { IPreloadResponse } from '../state';
import { mapContact } from './mapContact';

export const preload = (_context: PreloadContext.PreloadContext) => (page: Preload.Page, _session: any): IPreloadResponse => {
  const player = find(playersRaw, ({ footyWebNumber }) => footyWebNumber === page.params.code);
  const team = find(teamsRaw, ({ code }) => code === player.teamCode);

  const maxContactMethods = Math.max(...map(player.contacts, ({ contactMethods }) => contactMethods.length));

  const state = {
    footyWebNumber: player.footyWebNumber,
    initials: player.initials,
    lastName: player.lastName,
    firstName: player.firstName,
    dateOfBirth: player.dateOfBirth,
    club: player.club,
    gender: player.gender as any,
    disability: player.disability,
    contacts: map(player.contacts, (c) => mapContact(c, maxContactMethods)),
    transactions: [], //player.tr,
    clubHistory: player.clubHistory,
    team: {
      code: team.code,
      ageGroupCode: team.ageGroupCode,
      name: team.name,
      teamGender: team.teamGender,
    },
  };

  return { state };
};
