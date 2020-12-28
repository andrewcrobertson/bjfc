import { getDatabase } from '@this/scripts/utility/getDatabase';
import type { Request } from 'polka';
import type { IState } from '../state';
import { getPlayers } from './dataAccess/getPlayers';
import { toBirthdaysByMonth } from './mappers/toBirthdaysByMonth';

export const get = async (req: Request): Promise<IState> => {
  const month = parseInt(req.params.month);
  const db = getDatabase();
  const playersDb = getPlayers(db, month);
  const birthdaysByMonth = toBirthdaysByMonth(month, playersDb);
  return { birthdaysByMonth };
};
