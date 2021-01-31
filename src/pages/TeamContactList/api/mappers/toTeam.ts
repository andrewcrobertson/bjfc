import filter from 'lodash/filter';
import map from 'lodash/map';
import type { IState } from '../../state';
import type { IContactEmergencyDb } from '../dataAccess/getContactsEmergency';
import type { IContactGuardianDb } from '../dataAccess/getContactsGuardian';
import type { IContactRegisteredDb } from '../dataAccess/getContactsRegistered';
import type { IPlayerDb } from '../dataAccess/getPlayers';
import type { ITeamDb } from '../dataAccess/getTeam';
import { toPlayer } from './toPlayer';

export interface IDataDb {
  team: ITeamDb;
  players: IPlayerDb[];
  contactsEmergency: IContactEmergencyDb[];
  contactsGuardian: IContactGuardianDb[];
  contactsRegistered: IContactRegisteredDb[];
}

export const toTeam = (data: IDataDb): IState => {
  const { team, players, contactsEmergency, contactsGuardian, contactsRegistered } = data;
  return {
    code: team.code,
    ageGroupCode: `U${team.topAge}`,
    name: team.name,
    teamGender: team.gender,
    playersActive: map(
      filter(players, (p) => p.status === 'Insured' || p.status === 'Registered'),
      (player) => toPlayer({ player, contactsEmergency, contactsGuardian, contactsRegistered })
    ),
    playersRecent: map(
      filter(players, (p) => p.status === 'Recent'),
      (player) => toPlayer({ player, contactsEmergency, contactsGuardian, contactsRegistered })
    ),
    playersHistorical: map(
      filter(players, (p) => p.status === 'Historical'),
      (player) => toPlayer({ player, contactsEmergency, contactsGuardian, contactsRegistered })
    ),
    playersTransferred: map(
      filter(players, (p) => p.status === 'Transferred'),
      (player) => toPlayer({ player, contactsEmergency, contactsGuardian, contactsRegistered })
    ),
  };
};
