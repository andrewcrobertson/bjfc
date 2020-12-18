import map from 'lodash/map';
import type { IRawTeam } from '../../types/rawTeam';
import type { ISanitisedTeam } from '../../types/sanitisedTeam';
import { transformTeam } from './transformTeam';

export const transformTeams = (teams: IRawTeam[], seasonYear: number): ISanitisedTeam[] => map(teams, (team) => transformTeam(team, seasonYear));
