import type { IGuardianDb } from '../dataAccess/getGuardians';

export const toGuardians = (guardians: IGuardianDb[]) => {
  if (guardians.length === 0) {
    return 'Unknown';
  }

  const guardian1 = guardians[0];
  if (guardians.length === 1) {
    return `${guardian1.firstName} ${guardian1.lastName}`;
  }

  if (guardians.length >= 2) {
    const guardian2 = guardians[1];
    if (guardian1.lastName === guardian2.lastName) {
      if (guardian1.firstName === guardian2.firstName) {
        return `${guardian1.firstName} ${guardian1.lastName}`;
      }

      return `${guardian1.firstName} & ${guardian2.firstName} ${guardian2.lastName}`;
    }

    return `${guardian1.firstName} ${guardian1.lastName} & ${guardian2.firstName} ${guardian2.lastName}`;
  }
};
