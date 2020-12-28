import { getDatabase } from '@this/scripts/utility/getDatabase';
import map from 'lodash/map';
import type { Request } from 'polka';
import type { IState } from '../state';
import { getMembers } from './utility/dataAccess/getMembers';
import { toMember } from './utility/mappers/toMember';

export const get = async (_req: Request): Promise<IState> => {
  const db = getDatabase();
  const committeeListDb = getMembers(db);
  const committeeList = map(committeeListDb, toMember);
  return { committeeList };
};
