import type { PersonGenderEnum, TeamGenderEnum } from '../../constants/enums';
import * as personGenderEnum from '../../constants/personGenderEnum';
import * as teamGenderEnum from '../../constants/teamGenderEnum';

export const transformGender = (playerGenders: PersonGenderEnum[]): TeamGenderEnum => {
  if (playerGenders.length === 1) {
    if (playerGenders[0] === personGenderEnum.female) return teamGenderEnum.female;
    if (playerGenders[0] === personGenderEnum.male) return teamGenderEnum.male;
  }

  return teamGenderEnum.mixed;
};
