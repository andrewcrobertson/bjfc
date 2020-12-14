import flatten from 'lodash/flatten';
import map from 'lodash/map';

export const getPlayerOldestBirthYear = (config: any) => config.seasonYear - Math.max(...flatten(map(config.teams, (team) => team.ages)));
