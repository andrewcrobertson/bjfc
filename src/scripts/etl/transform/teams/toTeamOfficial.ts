import type { ITeamOfficial } from '@this/types/team';
import type { IRawTeamOfficial } from '../../types/rawTeam';
import { toContactMethods } from '../utility/toContactMethods';
import { toInitials } from '../utility/toInitials';

export const toTeamOfficial = (official: IRawTeamOfficial): ITeamOfficial => ({
  initials: toInitials(official.firstName, official.lastName),
  firstName: official.firstName,
  lastName: official.lastName,
  gender: official.gender,
  contactMethods: toContactMethods([
    { type: 'Phone', value: official.phone },
    { type: 'Email', value: official.email },
  ]),
});
