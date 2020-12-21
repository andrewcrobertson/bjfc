import type { Preload, PreloadContext } from '@sapper/common';
// import allData from '@this/data/allData';
import type { IPreloadResponse } from '../state';

export const preload = (_context: PreloadContext.PreloadContext) => (_page: Preload.Page, _session: any): IPreloadResponse => {
  return { state: null };
};
