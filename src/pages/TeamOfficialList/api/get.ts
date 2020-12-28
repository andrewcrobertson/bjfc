import { getDatabase } from '@this/scripts/utility/getDatabase';
import type { Request } from 'polka';
import type { IState } from '../state';
import { getOfficials } from './dataAccess/getOfficials';
import { getTeam } from './dataAccess/getTeam';
import { toTeam } from './mappers/toTeam';

export const get = async (req: Request): Promise<IState> => {
  const db = getDatabase();
  const teamDb = getTeam(db, req.params.code);
  const officialsDb = getOfficials(db, req.params.code);
  const team = toTeam({ team: teamDb, officials: officialsDb });
  return team;
};
