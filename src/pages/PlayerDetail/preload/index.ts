import type { Preload, PreloadContext } from '@sapper/common';
import playersRaw from '@this/data/players';
import find from 'lodash/find';
import type { IPreloadResponse } from '../state';

export const preload = (_context: PreloadContext.PreloadContext) => (page: Preload.Page, _session: any): IPreloadResponse => {
  const player = find(playersRaw, ({ footyWebNumber }) => footyWebNumber === page.params.code);
  const state = {
    footyWebNumber: player.footyWebNumber,
    initials: player.initials,
    lastName: player.lastName,
    firstName: player.firstName,
    dateOfBirth: player.dateOfBirth,
    club: player.club,
    gender: player.gender as any,
    disability: player.disability,
    contacts: player.contacts,
    transactions: [], //player.tr,
    clubHistory: player.clubHistory,
    team: {} as any,
  } as any;

  return { state };
};
