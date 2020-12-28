import { getDatabase } from '@this/utility/getDatabase';
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
import type { Request } from 'polka';
import type { IState } from '../state';

const playerIdsSql = `SELECT footyWebNumber FROM player ORDER BY footyWebNumber;`;
const teamIdsSql = `SELECT code FROM team ORDER BY code;`;

export const get = async (_req: Request): Promise<IState> => {
  const db = getDatabase();

  const playerIds = db.prepare(playerIdsSql).all();
  const teamIds = db.prepare(teamIdsSql).all();

  const links = [];
  links.push(getUrlHome());
  links.push(getUrlCommitteeList());
  links.push(getUrlTeamList());
  links.push(...map(playerIds, ({ footyWebNumber }) => getUrlPlayer(footyWebNumber)));
  links.push(...map(teamIds, ({ code }) => getUrlTeamOfficialList(code)));
  links.push(...map(teamIds, ({ code }) => getUrlTeamPlayerListCurrent(code)));
  links.push(...map(teamIds, ({ code }) => getUrlTeamPlayerListArchived(code)));
  links.sort();
  return { links };
};
