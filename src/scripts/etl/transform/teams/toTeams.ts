import type { ISanitisedTeam } from '@this/types/sanitisedTeam';
import map from 'lodash/map';
import type { IRawTeam } from '../../types/rawTeam';
import { toTeam } from './toTeam';

export const toTeams = (teams: IRawTeam[], seasonYear: number): ISanitisedTeam[] => map(teams, (team) => toTeam(team, seasonYear));
