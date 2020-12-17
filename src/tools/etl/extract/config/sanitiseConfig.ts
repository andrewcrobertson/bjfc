import map from 'lodash/map';
import { sanitiseMap } from './sanitiseMap';

export const sanitiseConfig = (obj: any) => ({
  seasonYear: obj.seasonYear,
  clubMap: map(obj.clubMap, sanitiseMap),
  noContact: obj.noContact,
  playerTeamExceptions: obj.playerTeamExceptions,
});
