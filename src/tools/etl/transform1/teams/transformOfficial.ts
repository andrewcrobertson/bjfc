import type { ISanitisedOfficial } from '../../sanitisedTeam';
import type { IRawConfigOfficial } from '../../types/rawConfig';
import { toInitials } from '../toInitials';

export const transformOfficial = (official: IRawConfigOfficial): ISanitisedOfficial => {
  if (official === null) {
    return null;
  }

  const initials = toInitials(official.firstName, official.lastName);
  return { ...official, initials };
};
