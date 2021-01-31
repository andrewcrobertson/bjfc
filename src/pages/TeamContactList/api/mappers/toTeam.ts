import filter from 'lodash/filter';
import map from 'lodash/map';
import type { IState } from '../../state';
import type { IPlayerDb } from '../dataAccess/getPlayers';
import type { ITeamDb } from '../dataAccess/getTeam';
import { toPlayer } from './toPlayer';

export interface IDataDb {
  players: IPlayerDb[];
  team: ITeamDb;
}

export const toTeam = (data: IDataDb): IState => ({
  code: data.team.code,
  ageGroupCode: `U${data.team.topAge}`,
  name: data.team.name,
  teamGender: data.team.gender,
  playersActive: map(
    filter(data.players, (p) => p.status === 'Insured' || p.status === 'Registered'),
    toPlayer
  ),
  playersRecent: map(
    filter(data.players, (p) => p.status === 'Recent'),
    toPlayer
  ),
  playersHistorical: map(
    filter(data.players, (p) => p.status === 'Historical'),
    toPlayer
  ),
  playersTransferred: map(
    filter(data.players, (p) => p.status === 'Transferred'),
    toPlayer
  ),
});
