import map from 'lodash/map';
import type { IRawConfig } from '../../types/rawConfig';
import { sanitiseMap } from '../utility/sanitiseMap';

export const sanitiseConfig = (obj: any): IRawConfig => ({
  seasonYear: obj.seasonYear,
  clubMap: map(obj.clubMap, sanitiseMap),
  noContact: obj.noContact,
  playerTeamExceptions: obj.playerTeamExceptions,
});
