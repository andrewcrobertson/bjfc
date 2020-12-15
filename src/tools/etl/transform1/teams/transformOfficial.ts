import type { IRawConfigOfficial } from '../../rawConfig';
import type { ISanitisedOfficial } from '../../sanitisedTeam';
import { toInitials } from '../toInitials';

export const transformOfficial = (official: IRawConfigOfficial): ISanitisedOfficial => {
  if (official === null) {
    return null;
  }

  const initials = toInitials(official.firstName, official.familyName);
  return { ...official, initials };
};
