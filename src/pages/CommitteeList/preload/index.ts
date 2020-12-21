import type { Preload, PreloadContext } from '@sapper/common';
import allData from '@this/data/allData';
import map from 'lodash/map';
import type { IPreloadResponse } from '../state';

export const preload = (_context: PreloadContext.PreloadContext) => (_page: Preload.Page, _session: any): IPreloadResponse => {
  const committeeList = map(allData.committee, (member) => ({
    role: member.role,
    initials: member.initials,
    firstName: member.firstName,
    lastName: member.lastName,
    gender: member.gender,
    contactMethods: member.contactMethods as any[],
  }));

  return { state: { committeeList } };
};
