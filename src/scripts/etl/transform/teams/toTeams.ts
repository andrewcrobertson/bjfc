import map from 'lodash/map';
import type { IRawTeam } from '../../types/rawTeam';
import type { ISanitisedTeam } from '../../types/sanitisedTeam';
import { toTeam } from './toTeam';

export const toTeams = (teams: IRawTeam[], seasonYear: number): ISanitisedTeam[] => map(teams, (team) => toTeam(team, seasonYear));
