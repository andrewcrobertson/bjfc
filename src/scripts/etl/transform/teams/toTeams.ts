import map from 'lodash/map';
import type { ISanitisedTeam } from '../../../../types/sanitisedTeam';
import type { IRawTeam } from '../../types/rawTeam';
import { toTeam } from './toTeam';

export const toTeams = (teams: IRawTeam[], seasonYear: number): ISanitisedTeam[] => map(teams, (team) => toTeam(team, seasonYear));
