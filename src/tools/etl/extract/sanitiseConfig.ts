import map from 'lodash/map';
import { sanitiseTeam } from './sanitiseTeam';

export const sanitiseConfig = (obj: any) => ({
  seasonYear: obj.seasonYear,
  registeredLastSeason: obj.registeredLastSeason,
  noContact: obj.noContact,
  playerTeamExceptions: obj.playerTeamExceptions,
  registeredThisSeason: obj.registeredThisSeason,
  teams: map(obj.teams, sanitiseTeam),
});
