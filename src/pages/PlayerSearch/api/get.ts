import { getDatabase } from '@this/common/utility/getDatabase';
import type { Request } from 'polka';
import type { IState } from '../state';
import { getGuardians } from './utility/dataAccess/getGuardians';
import { getPlayers } from './utility/dataAccess/getPlayers';
import { toPlayer } from './utility/mappers/toPlayer';

export const get = async (_req: Request): Promise<IState> => {
  const db = getDatabase();
  const playersDb = getPlayers(db);
  const guardiansDb = getGuardians(db);
  const players = toPlayer({ guardians: guardiansDb, players: playersDb });
  return { players };
};
