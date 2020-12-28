import { getDatabase } from '@this/scripts/utility/getDatabase';
import map from 'lodash/map';
import type { Request } from 'polka';
import type { IState } from '../state';
import { getTeams } from './dataAccess/getTeams';
import { toTeam } from './mappers/toTeam';

export const get = async (_req: Request): Promise<IState> => {
  const db = getDatabase();
  const teamListDb = getTeams(db);
  const teamList = map(teamListDb, toTeam);
  return { teams: teamList };
};
