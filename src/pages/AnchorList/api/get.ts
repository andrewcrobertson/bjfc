import { getDatabase } from '@this/scripts/utility/getDatabase';
import type { Request } from 'polka';
import type { IState } from '../state';
import { getPlayer } from './utility/dataAccess/getPlayer';
import { getTeam } from './utility/dataAccess/getTeam';
import { toLinks } from './utility/mappers/toLinks';

export const get = async (_req: Request): Promise<IState> => {
  const db = getDatabase();
  const players = getPlayer(db);
  const teams = getTeam(db);
  const links = toLinks({ players, teams });
  return { links };
};
