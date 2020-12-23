import type { Preload, PreloadContext } from '@sapper/common';
import playersRaw from '@this/data/players';
import filter from 'lodash/filter';
import map from 'lodash/map';
import type { IPreloadResponse } from '../state';
import { mapPlayer } from './mapPlayer';

export const preload = (_context: PreloadContext.PreloadContext) => (page: Preload.Page, _session: any): IPreloadResponse => {
  const players = map(
    filter(playersRaw, ({ status }) => status === 'Insured' || status === 'Registered' || status === 'Recent'),
    mapPlayer
  );
  return { state: { players } };
};
