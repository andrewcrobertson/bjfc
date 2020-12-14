import * as personGenderEnum from '@this/constants/personGenderEnum';
import * as teamGenderEnum from '@this/constants/teamGenderEnum';

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
