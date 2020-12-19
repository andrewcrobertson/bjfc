import type { IRawTeamOfficial } from '../../types/rawTeam';
import type { ISanitisedOfficial } from '../../types/sanitisedTeam';
import { toInitials } from '../utility/toInitials';

export const toTeamOfficial = (official: IRawTeamOfficial): ISanitisedOfficial => ({
  initials: toInitials(official.firstName, official.lastName),
  firstName: official.firstName,
  lastName: official.lastName,
  gender: official.gender,
  phone: official.phone,
  email: official.email,
});
