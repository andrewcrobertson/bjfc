import filter from 'lodash/filter';
import flatten from 'lodash/flatten';
import includes from 'lodash/includes';
import map from 'lodash/map';
import type { IRawConfigTeam } from '../../rawConfig';

export const getPlayerOldestBirthYear = (teams: IRawConfigTeam[], seasonYear: number, gender: string) => {
  const teamsWithGender = filter(teams, ({ genders }) => includes(genders, gender));
  return seasonYear - Math.max(...flatten(map(teamsWithGender, ({ ages }) => ages)));
};
