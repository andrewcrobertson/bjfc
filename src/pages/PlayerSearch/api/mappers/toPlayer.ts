import { getStatusInfo } from '@this/scripts/utility/getStatusInfo';
import { toInitials } from '@this/scripts/utility/toInitials';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import type { IPlayer } from '../../state';
import type { IGuardianDb } from '../dataAccess/getGuardians';
import type { IPlayerDb } from '../dataAccess/getPlayers';
import { toGuardians } from './toGuardians';
import { toSearchTerms } from './toSearchTerms';

export interface IDataDb {
  guardians: IGuardianDb[];
  players: IPlayerDb[];
}

export const toPlayer = (data: IDataDb): IPlayer[] => {
  const guardians = groupBy(data.guardians, (c) => c.footyWebNumber);

  return map(data.players, (p) => ({
    footyWebNumber: p.footyWebNumber,
    status: p.status,
    statusInfo: getStatusInfo(p.status, p.club, p.yearLastRegistered, p.yearLastTransferred),
    initials: toInitials(`${p.firstName} ${p.lastName}`),
    lastName: p.lastName,
    firstName: p.firstName,
    gender: p.gender,
    guardians: toGuardians(guardians[p.footyWebNumber] ?? []),
    searchTerms: toSearchTerms(p, guardians[p.footyWebNumber] ?? []),
  }));
};
