import * as personGenderEnum from '@this/scripts/constants/personGenderEnum';
import * as teamGenderEnum from '@this/scripts/constants/teamGenderEnum';

export const background = {
  [teamGenderEnum.female]: 'yellow',
  [teamGenderEnum.male]: 'green',
  [teamGenderEnum.mixed]: 'gray',
};

export const personBackground = {
  [personGenderEnum.female]: 'yellow',
  [personGenderEnum.male]: 'green',
  [personGenderEnum.unknown]: 'gray',
};
