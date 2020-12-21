import type { ITeam } from '@this/types/team';
import map from 'lodash/map';
import type { IRawTeam } from '../../types/rawTeam';
import { toTeam } from './toTeam';

export const toTeams = (teams: IRawTeam[], seasonYear: number): ITeam[] => map(teams, (team) => toTeam(team, seasonYear));
