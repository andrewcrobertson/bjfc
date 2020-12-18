import type { ISanitisedOfficial } from '../../sanitisedTeam';
import type { IRawTeamOfficial } from '../../types/rawTeam';
import { toInitials } from '../utility/toInitials';

export const transformOfficial = (official: IRawTeamOfficial): ISanitisedOfficial => {
  if (official === null) {
    return null;
  }

  const initials = toInitials(official.firstName, official.lastName);
  return { ...official, initials };
};
