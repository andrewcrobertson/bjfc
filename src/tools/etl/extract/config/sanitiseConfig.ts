import map from 'lodash/map';
import { sanitiseMap } from './sanitiseMap';
import { sanitiseTeam } from './sanitiseTeam';

export const sanitiseConfig = (obj: any) => ({
  seasonYear: obj.seasonYear,
  registeredRecently: obj.registeredRecently,
  registeredThisSeason: obj.registeredThisSeason,
  clubMap: map(obj.clubMap, sanitiseMap),
  productMap: map(obj.productMap, sanitiseMap),
  noContact: obj.noContact,
  playerTeamExceptions: obj.playerTeamExceptions,
  teams: map(obj.teams, sanitiseTeam),
});
