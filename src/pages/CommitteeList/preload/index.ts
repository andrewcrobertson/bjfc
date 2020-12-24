import type { Preload, PreloadContext } from '@sapper/common';
import committeeRaw from '@this/data/committee';
import map from 'lodash/map';
import type { IPreloadResponse } from '../state';
import { mapContactTypeMethods } from './mapContactTypeMethods';

export const preload = (_context: PreloadContext.PreloadContext) => (_page: Preload.Page, _session: any): IPreloadResponse => {
  const committeeList = map(committeeRaw, (member) => ({
    role: member.role,
    initials: member.initials,
    firstName: member.firstName,
    lastName: member.lastName,
    gender: member.gender,
    contactMethods: mapContactTypeMethods(member.contactMethods),
  }));

  return { state: { committeeList } };
};