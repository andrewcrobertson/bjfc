import { getStatusInfo } from '@this/scripts/utility/getStatusInfo';
import { toInitials } from '@this/scripts/utility/toInitials';
import map from 'lodash/map';
import type { IState } from '../../../state';
import type { IClubHistoryDb } from '../dataAccess/getClubHistory';
import type { IContactEmergencyDb } from '../dataAccess/getContactsEmergency';
import type { IContactGuardianDb } from '../dataAccess/getContactsGuardian';
import type { IContactRegisteredDb } from '../dataAccess/getContactsRegistered';
import type { IDisabilityDb } from '../dataAccess/getDisability';
import type { IPlayerDb } from '../dataAccess/getPlayer';
import type { IRecentTransactionsDb } from '../dataAccess/getRecentTransactions';
import type { ITeamDb } from '../dataAccess/getTeam';
import { toContacts } from './toContacts';
import { toDisability } from './toDisability';

export interface IDataDb {
  clubHistory: IClubHistoryDb[];
  contactsEmergency: IContactEmergencyDb[];
  contactsGuardian: IContactGuardianDb[];
  contactsRegistered: IContactRegisteredDb[];
  disability: IDisabilityDb;
  player: IPlayerDb;
  recentTransactions: IRecentTransactionsDb[];
  team: ITeamDb;
}

export const toPlayer = (data: IDataDb): IState => {
  return {
    footyWebNumber: data.player.footyWebNumber,
    initials: toInitials(`${data.player.firstName} ${data.player.lastName}`),
    lastName: data.player.lastName,
    firstName: data.player.firstName,
    dateOfBirth: data.player.dateOfBirth,
    status: data.player.status,
    statusInfo: getStatusInfo(data.player.status, data.player.club, data.player.yearLastRegistered, data.player.yearLastTransferred),
    club: data.player.club,
    gender: data.player.gender,
    disability: toDisability(data.disability),
    contacts: toContacts(data),
    transactions: map(data.recentTransactions, (t) => ({ ...t, year: parseInt(t.year.toString().substring(2, 4)) })),
    clubHistory: data.clubHistory,
    team: {
      code: data.team.code,
      name: data.team.name,
      ageGroupCode: `U${data.team.topAge}`,
      teamGender: data.team.gender,
    },
  };
};
