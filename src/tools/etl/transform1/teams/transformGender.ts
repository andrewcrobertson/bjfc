import type { PersonGenderEnum, TeamGenderEnum } from '@this/constants/enums';

export const transformGender = (playerGenders: PersonGenderEnum[]): TeamGenderEnum => {
  if (playerGenders.length === 1) {
    if (playerGenders[0] === 'Female') return 'Female';
    if (playerGenders[0] === 'Male') return 'Male';
  }

  return 'Mixed';
};
