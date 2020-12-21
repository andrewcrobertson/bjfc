import type { ITeamOfficial } from '@this/types/team';
import { mapContactTypeMethods } from './mapContactTypeMethods';

export const mapTeamOfficial = (official: ITeamOfficial) => {
  if (official === null) {
    return null;
  }

  return {
    initials: official.initials,
    firstName: official.firstName,
    lastName: official.lastName,
    contactMethods: mapContactTypeMethods(official.contactMethods),
    gender: official.gender,
  };
};
