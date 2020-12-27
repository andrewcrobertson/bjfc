// import type { Preload, PreloadContext } from '@sapper/common';
// import { getDatabase } from '@this/data/getDatabase';
// import {
//   getUrlCommitteeList,
//   getUrlHome,
//   getUrlPlayer,
//   getUrlTeamList,
//   getUrlTeamOfficialList,
//   getUrlTeamPlayerListArchived,
//   getUrlTeamPlayerListCurrent
// } from '@this/utility/getUrl';
// import map from 'lodash/map';
// import type { IPreloadResponse } from '../state';

// const playerIdsSql = `SELECT footyWebNumber FROM player ORDER BY footyWebNumber;`;
// const teamIdsSql = `SELECT code FROM team ORDER BY code;`;

// export const preload = (_context: PreloadContext.PreloadContext) => (_page: Preload.Page, _session: any): IPreloadResponse => {
//   const db = getDatabase();

//   const playerIds = db.prepare(playerIdsSql).all();
//   const teamIds = db.prepare(teamIdsSql).all();

//   const links = [];
//   links.push(getUrlHome());
//   links.push(getUrlCommitteeList());
//   links.push(getUrlTeamList());
//   links.push(...map(playerIds, ({ footyWebNumber }) => getUrlPlayer(footyWebNumber)));
//   links.push(...map(teamIds, ({ code }) => getUrlTeamOfficialList(code)));
//   links.push(...map(teamIds, ({ code }) => getUrlTeamPlayerListCurrent(code)));
//   links.push(...map(teamIds, ({ code }) => getUrlTeamPlayerListArchived(code)));
//   links.sort();
//   return { state: { links } };
// };

import type { Preload, PreloadContext } from '@sapper/common';
import type { IPreloadResponse } from '../state';

export const preload = (_context: PreloadContext.PreloadContext) => (_page: Preload.Page, _session: any): IPreloadResponse => {
  return null;
};
