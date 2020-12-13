import flatten from 'lodash/flatten';
import map from 'lodash/map';
import type { IConfig } from '../config';

export const getYear = (config: IConfig) => Math.min(...flatten(map(config.teams, (team) => team.years)));
