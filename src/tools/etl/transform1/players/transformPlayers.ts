import map from 'lodash/map';
import type { IRawPlayer } from '../../types/rawPlayer';
import type { ISanitisedPlayer } from '../../types/sanitisedPlayer';
import type { ISanitisedTransaction } from '../../types/sanitisedTransaction';
import type { ISanitisedTransfer } from '../../types/sanitisedTransfer';
import { transformPlayer } from './transformPlayer';

export const transformPlayers = (
  players: IRawPlayer[],
  registrationProductsThisSeason: string[],
  registrationProductsRecent: string[],
  transactions: ISanitisedTransaction[],
  transfers: ISanitisedTransfer[]
): ISanitisedPlayer[] => {
  return map(players, (player) => transformPlayer(player, registrationProductsThisSeason, registrationProductsRecent, transactions, transfers));
};
