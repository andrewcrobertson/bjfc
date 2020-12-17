import type { PersonGenderEnum } from '@this/constants/enums';
import filter from 'lodash/filter';
import flatten from 'lodash/flatten';
import includes from 'lodash/includes';
import map from 'lodash/map';
import type { IRawConfigTeam } from '../../types/rawConfig';

export const getPlayerOldestBirthYear = (teams: IRawConfigTeam[], seasonYear: number, gender: PersonGenderEnum) => {
  const teamsWithGender = filter(teams, ({ genders }) => includes(genders, gender));
  return seasonYear - Math.max(...flatten(map(teamsWithGender, ({ ages }) => ages)));
};
