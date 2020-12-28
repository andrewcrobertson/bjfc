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
  playersTransferred: map(
    filter(data.players, (p) => p.status === 'Transferred'),
    toPlayer
  ),
  playersHistorical: map(
    filter(data.players, (p) => p.status === 'Historical'),
    toPlayer
  ),
});
