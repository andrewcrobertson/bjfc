import { getDatabase } from '@this/data/getDatabase';
import { toContactMethods } from '@this/utility/toContactMethods';
import { toInitials } from '@this/utility/toInitials';
import map from 'lodash/map';
import type { Request } from 'polka';
import type { IState } from '../state';

const comitteeSql = `SELECT role, firstName, lastName, gender, phone, email FROM committee;`;

export const get = async (_req: Request): Promise<IState> => {
  const db = getDatabase();

  const committeeListRaw = db.prepare(comitteeSql).all();
  const committeeList = map(committeeListRaw, ({ role, firstName, lastName, gender, phone, email }) => ({
    role,
    initials: toInitials(`${firstName}, ${lastName}`),
    firstName,
    lastName,
    gender,
    contactMethods: toContactMethods([
      { type: 'Phone', value: phone },
      { type: 'Email', value: email },
    ]),
  }));

  return { committeeList };
};
