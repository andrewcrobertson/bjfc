import { getDatabase } from '@this/scripts/utility/getDatabase';
import type { Request } from 'polka';
import type { IState } from '../state';
import { getContactsEmergency } from './dataAccess/getContactsEmergency';
import { getContactsGuardian } from './dataAccess/getContactsGuardian';
import { getContactsRegistered } from './dataAccess/getContactsRegistered';
import { getPlayers } from './dataAccess/getPlayers';
import { getTeam } from './dataAccess/getTeam';
import { toTeam } from './mappers/toTeam';

export const get = async (req: Request): Promise<IState> => {
  const db = getDatabase();
  const team = getTeam(db, req.params.code);
  const players = getPlayers(db, req.params.code);
  const contactsEmergency = getContactsEmergency(db, req.params.code);
  const contactsGuardian = getContactsGuardian(db, req.params.code);
  const contactsRegistered = getContactsRegistered(db, req.params.code);
  return toTeam({ team, players, contactsEmergency, contactsGuardian, contactsRegistered });
};
