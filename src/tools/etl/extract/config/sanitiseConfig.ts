import map from 'lodash/map';
import type { IRawConfig } from '../../types/rawConfig';
import { sanitiseMap } from './sanitiseMap';
import { sanitiseNoContact } from './sanitiseNoContact';
import { sanitisePlayerTeamExceptions } from './sanitisePlayerTeamExceptions';

export const sanitiseConfig = (obj: any): IRawConfig => ({
  seasonYear: obj.seasonYear,
  clubMap: map(obj.clubMap, sanitiseMap),
  noContact: map(obj.noContact, sanitiseNoContact),
  playerTeamExceptions: map(obj.playerTeamExceptions, sanitisePlayerTeamExceptions),
});
