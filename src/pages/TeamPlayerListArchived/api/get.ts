import { getDatabase } from '@this/scripts/utility/getDatabase';
import type { Request } from 'polka';
import type { IState } from '../state';
import { getPlayers } from './dataAccess/getPlayers';
import { getTeam } from './dataAccess/getTeam';
import { toTeam } from './mappers/toTeam';

export const get = async (req: Request): Promise<IState> => {
  const db = getDatabase();
  const teamDb = getTeam(db, req.params.code);
  const playersDb = getPlayers(db, req.params.code);
  return toTeam({ team: teamDb, players: playersDb });
};
