import { getDatabase } from '@this/data/getDatabase';
import type { Request } from 'polka';
import type { IState } from '../state';
import { getClubHistory } from './utility/dataAccess/getClubHistory';
import { getContactsEmergency } from './utility/dataAccess/getContactsEmergency';
import { getContactsGuardian } from './utility/dataAccess/getContactsGuardian';
import { getContactsRegistered } from './utility/dataAccess/getContactsRegistered';
import { getDisability } from './utility/dataAccess/getDisability';
import { getPlayer } from './utility/dataAccess/getPlayer';
import { getRecentTransactions } from './utility/dataAccess/getRecentTransactions';
import { getTeam } from './utility/dataAccess/getTeam';
import { toPlayer } from './utility/mappers/toPlayer';

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
