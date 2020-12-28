import { getDatabase } from '@this/scripts/utility/getDatabase';
import type { Request } from 'polka';
import type { IState } from '../state';
import { getClubHistory } from './dataAccess/getClubHistory';
import { getContactsEmergency } from './dataAccess/getContactsEmergency';
import { getContactsGuardian } from './dataAccess/getContactsGuardian';
import { getContactsRegistered } from './dataAccess/getContactsRegistered';
import { getDisability } from './dataAccess/getDisability';
import { getPlayer } from './dataAccess/getPlayer';
import { getRecentTransactions } from './dataAccess/getRecentTransactions';
import { getTeam } from './dataAccess/getTeam';
import { toPlayer } from './mappers/toPlayer';

export const get = async (req: Request): Promise<IState> => {
  const db = getDatabase();

  const player = getPlayer(db, req.params.code);

  if (player === null) {
    return null;
  }

  const clubHistory = getClubHistory(db, player.footyWebNumber);
  const contactsEmergency = getContactsEmergency(db, player.footyWebNumber);
  const contactsGuardian = getContactsGuardian(db, player.footyWebNumber);
  const contactsRegistered = getContactsRegistered(db, player.footyWebNumber);
  const disability = getDisability(db, player.footyWebNumber);
  const recentTransactions = getRecentTransactions(db, player.footyWebNumber);
  const team = getTeam(db, player.teamCode);

  return toPlayer({ clubHistory, contactsEmergency, contactsGuardian, contactsRegistered, disability, player, recentTransactions, team });
};
