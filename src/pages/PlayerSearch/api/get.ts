import { getDatabase } from '@this/scripts/utility/getDatabase';
import type { Request } from 'polka';
import type { IState } from '../state';
import { getGuardians } from './dataAccess/getGuardians';
import { getPlayers } from './dataAccess/getPlayers';
import { toPlayer } from './mappers/toPlayer';

export const get = async (_req: Request): Promise<IState> => {
  const db = getDatabase();
  const playersDb = getPlayers(db);
  const guardiansDb = getGuardians(db);
  const players = toPlayer({ guardians: guardiansDb, players: playersDb });
  return { players };
};
