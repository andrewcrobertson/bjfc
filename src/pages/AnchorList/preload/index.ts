import type { Preload, PreloadContext } from '@sapper/common';
import allData from '@this/data/allData';
import map from 'lodash/map';
import type { IPreloadResponse } from '../state';

export const preload = (_context: PreloadContext.PreloadContext) => (_page: Preload.Page, _session: any): IPreloadResponse => {
  const links = [];
  links.push('/');
  links.push('/committee/');
  links.push(...map(allData.players, ({ footyWebNumber }) => `/players/${footyWebNumber}/`));
  links.push(...map(allData.teams, ({ code }) => `/teams/${code}/officials/`));
  links.push(...map(allData.teams, ({ code }) => `/teams/${code}/players/archived/`));
  links.push(...map(allData.teams, ({ code }) => `/teams/${code}/players/archived/`));
  links.sort();
  return { state: { links } };
};
