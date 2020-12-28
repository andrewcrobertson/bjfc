import { getDatabase } from '@this/scripts/utility/getDatabase';
import format from 'date-fns/format';
import map from 'lodash/map';
import type { Request } from 'polka';
import type { IState } from '../state';
import { getPlayers } from './dataAccess/getPlayers';
import { toPlayer } from './mappers/toPlayer';

export const get = async (req: Request): Promise<IState> => {
  const month = parseInt(req.params.month);
  const monthName = format(new Date(1900, month - 1, 1), 'MMMM');
  const db = getDatabase();
  const playersDb = getPlayers(db, month);
  const players = map(playersDb, toPlayer);
  const birthdaysByMonth = { month, monthName, players };
  return birthdaysByMonth;
};
