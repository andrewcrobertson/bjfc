import filter from 'lodash/filter';
import flatten from 'lodash/flatten';
import includes from 'lodash/includes';
import map from 'lodash/map';

export const getPlayerOldestBirthYear = (config: any, gender: any) => {
  const teams = filter(config.teams, ({ genders }) => includes(genders, gender));
  return config.seasonYear - Math.max(...flatten(map(teams, ({ ages }) => ages)));
};
