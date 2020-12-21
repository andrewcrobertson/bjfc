import type { Preload, PreloadContext } from '@sapper/common';
import playersRaw from '@this/data/players';
import teamsRaw from '@this/data/teams';
import map from 'lodash/map';
import type { IPreloadResponse } from '../state';

export const preload = (_context: PreloadContext.PreloadContext) => (_page: Preload.Page, _session: any): IPreloadResponse => {
  const links = [];
  links.push('/');
  links.push('/committee/');
  links.push(...map(playersRaw, ({ footyWebNumber }) => `/players/${footyWebNumber}/`));
  links.push(...map(teamsRaw, ({ code }) => `/teams/${code}/officials/`));
  links.push(...map(teamsRaw, ({ code }) => `/teams/${code}/players/archived/`));
  links.push(...map(teamsRaw, ({ code }) => `/teams/${code}/players/archived/`));
  links.sort();
  return { state: { links } };
};
