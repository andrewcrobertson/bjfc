import map from 'lodash/map';
import { sanitiseTeam } from './sanitiseTeam';

export const sanitiseConfig = (obj: any) => ({
  seasonYear: obj.seasonYear,
  registeredRecently: obj.registeredRecently,
  registeredThisSeason: obj.registeredThisSeason,
  clubMap: obj.clubMap,
  productMap: obj.productMap,
  noContact: obj.noContact,
  playerTeamExceptions: obj.playerTeamExceptions,
  teams: map(obj.teams, sanitiseTeam),
});
