import type { Preload, PreloadContext } from '@sapper/common';
import playersRaw from '@this/data/players';
import teamsRaw from '@this/data/teams';
import {
  getUrlCommitteeList,
  getUrlHome,
  getUrlPlayer,
  getUrlTeamList,
  getUrlTeamOfficialList,
  getUrlTeamPlayerListArchived,
  getUrlTeamPlayerListCurrent,
} from '@this/utility/getUrl';
import map from 'lodash/map';
import type { IPreloadResponse } from '../state';

export const preload = (_context: PreloadContext.PreloadContext) => (_page: Preload.Page, _session: any): IPreloadResponse => {
  const links = [];
  links.push(getUrlHome());
  links.push(getUrlCommitteeList());
  links.push(getUrlTeamList());
  links.push(...map(playersRaw, ({ footyWebNumber }) => getUrlPlayer(footyWebNumber)));
  links.push(...map(teamsRaw, ({ code }) => getUrlTeamOfficialList(code)));
  links.push(...map(teamsRaw, ({ code }) => getUrlTeamPlayerListCurrent(code)));
  links.push(...map(teamsRaw, ({ code }) => getUrlTeamPlayerListArchived(code)));
  links.sort();
  return { state: { links } };
};
