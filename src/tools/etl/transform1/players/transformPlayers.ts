import map from 'lodash/map';
import type { IRawPlayer } from '../../types/rawPlayer';
import type { ISanitisedPlayer } from '../../types/sanitisedPlayer';
import { transformPlayer } from './transformPlayer';

export const transformPlayers = (players: IRawPlayer[]): ISanitisedPlayer[] => map(players, transformPlayer);
