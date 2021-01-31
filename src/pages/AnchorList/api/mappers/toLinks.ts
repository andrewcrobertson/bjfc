import {
  getUrlCommitteeList,
  getUrlHome,
  getUrlPlayer,
  getUrlTeamContactPdf,
  getUrlTeamList,
  getUrlTeamOfficialList,
  getUrlTeamPlayerListArchived,
  getUrlTeamPlayerListCurrent,
} from '@this/scripts/utility/getUrl';
import map from 'lodash/map';
import type { IPlayerDb } from '../dataAccess/getPlayer';
import type { ITeamDb } from '../dataAccess/getTeam';

export interface IDataDb {
  players: IPlayerDb[];
  teams: ITeamDb[];
}

export const toLinks = (data: IDataDb): string[] => {
  const links = [];
  links.push(getUrlHome());
  links.push(getUrlCommitteeList());
  links.push(getUrlTeamList());
  links.push(...map(data.players, ({ footyWebNumber }) => getUrlPlayer(footyWebNumber)));
  links.push(...map(data.teams, ({ code }) => getUrlTeamOfficialList(code)));
  links.push(...map(data.teams, ({ code }) => getUrlTeamPlayerListCurrent(code)));
  links.push(...map(data.teams, ({ code }) => getUrlTeamPlayerListArchived(code)));
  links.push(...map(data.teams, ({ code }) => getUrlTeamContactPdf(code)));
  links.sort();
  return links;
};
